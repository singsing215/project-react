import React from 'react';
import Select from 'react-select';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/Button';
import Typography from '@material-ui/core/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';



const options = [
    { value: '', label: 'All' },
    { value: 'Robinson+Heights', label: 'Robinson Heights' },
    { value: 'Hoi+deen+Court', label: 'Hoi deen Court' },
    { value: 'Lime+Stardom', label: 'Lime Stardom' },
    { value: 'AKVO+Hotel', label: 'AKVO Hotel' },
];

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            selectedOption: "",
            value: ""
        }
    }

    componentDidMount() {
        fetch('/rent/jhome')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    items: data
                })
            })
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    handleInput = e => {
        this.setState({ value: e.target.value });
        console.log(`bedroom:`, this.state.value);
    };

    handleSubmit = (selectedOption) => {
        console.log(this.state.selectedOption.value);
        console.log(this.state.value);
        if (!(this.state.selectedOption.value)) {
            fetch('/rent/jpaginate?bedroom=' + this.state.value)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        items: data
                    })
                });
            console.log('/rent/jpaginate?bedroom=' + this.state.value)
        }
        else {
            fetch('/rent/jpaginate?estate=' + this.state.selectedOption.value + '&bedroom=' + this.state.value)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        items: data
                    })
                });
            console.log('/rent/jpaginate?estate=' + this.state.selectedOption.value + '&bedroom=' + this.state.value);
        }
        selectedOption.preventDefault(); //阻止跳转
    }

    render() {
        const { selectedOption } = this.state;
        const { items } = this.state
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="card col-12 col-sm-4 col-lg-4 col-xl-3">
                            <form onSubmit={this.handleSubmit} >
                                <Select
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                                <input type="number" min={1} value={this.state.value} class="form-control" name="bedroom" onChange={this.handleInput} required />
                                <button type="submit" value="提交">提交</button>
                            </form>
                        </div>


                        {
                            items.length > 0 ?
                                <div className="card col-12 col-sm-8 col-lg-8 col-xl-9">
                                    <div className="row">
                                        {
                                            items.map((element) => {
                                                return (
                                                    <Card >
                                                        <CardActionArea>
                                                            <Button href={"http://localhost:1337/rent/details/" + element.id}>
                                                                <CardMedia
                                                                    component="img"
                                                                    alt="Contemplative Reptile"
                                                                    height="200"
                                                                    id="img"
                                                                    src={element.url}
                                                                />
                                                            </Button>
                                                        </CardActionArea>
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="h2">
                                                                {element.estate}
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                {element.title}
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                <i class="fas fa-bed"></i>{element.bedroom}
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                <i class="fas fa-hand-holding-usd"></i>${element.rent}
                                                            </Typography>
                                                            <Button variant="outlined" color="primary" href={"http://localhost:1337/rent/details/" + element.id}>Details </Button>
                                                        </CardContent>
                                                    </Card>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                : <div>No matching data</div>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}