import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/Button';
import Typography from '@material-ui/core/Button';
import { LinearProgress } from '@material-ui/core';
import "../css/Search.scss";


export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch('/rent/json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    items: data
                })
            })
    }

    render() {
        const { items } = this.state
        return (
            <div>
                <Header />
                {
                    items.length > 0 ?
                        <section>
                            <div class="container">
                                <div class="row">
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
                                                            <i class="fas fa-th"> </i>{element.area}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            <i class="fas fa-hand-holding-usd"></i>${element.rent}
                                                        </Typography>
                                                        <Button size="small" color="primary" href={"http://localhost:1337/rent/details/" + element.id}>
                                                            Learn More
                                                  </Button>
                                                    </CardContent>
                                                </Card>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </section>
                        : <div id="line"><LinearProgress /><LinearProgress color="secondary" /></div>
                }
                <Footer />
            </div>
        )
    }
}