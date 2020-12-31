import React, { useState, useEffect } from "react"
import Header from './components/Header';
import Footer from './components/Footer';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/Button';
import Typography from '@material-ui/core/Button';
import { LinearProgress } from '@material-ui/core';
import "./css/Home.scss";


const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await fetch("/rent/jhome");
            const data = await response.json();
            console.log(data)
            setData(data)
            setLoading(false)
        })(); //useEffect(() => {f()},[])     f=(async()=>{})
    }, [])

    return (
        <div id="container">
            <Header />
            <section style={{ marginBottom: 110 }}>
                {loading ? <div id="line"><LinearProgress /><LinearProgress color="secondary" /></div> :
                    <div className="container">
                        <div className="row">
                            {data.map((item, index) => (
                                <Card key={index}>
                                    <CardActionArea>
                                        <Button href={"http://localhost:1337/rent/details/" + item.id}>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="200"
                                                id="img"
                                                src={item.url}
                                            />
                                        </Button>
                                    </CardActionArea>
                                    <CardContent>
                                        <Typography component="h2">
                                            {item.estate}
                                        </Typography>
                                        <Typography component="p">
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Typography component="p">
                                            <i className="fas fa-th"> </i>{item.area}
                                        </Typography>
                                        <Typography component="p">
                                            <i className="fas fa-hand-holding-usd"></i>${item.rent}
                                        </Typography>
                                        <Button color="primary" href={"http://localhost:1337/rent/details/" + item.id}>Details </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                }
            </section>
            <Footer />
        </div>
    )
}

export default Home

/////////////////////////// Without Hook //////////////////////////////////

// export default class Home extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             items: []
//         }
//     }

    // componentDidMount() {
    //     fetch('/rent/jhome')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             this.setState({
    //                 items: data
    //             })
    //         })
    // }

//     render() {
//            const { items } = this.state
//         return (
//             <div>
//                 <Header />
//                 {
//                     items.length > 0 ?
//                         <section style={{ marginBottom: 110 }}>
//                             <div class="container">
//                                 <div class="row">
//                                     {
//                                         items.map((element) => {
//                                             return (
//                                                 <Card >
//                                                     <CardActionArea>
//                                                         <Button href={"http://localhost:1337/rent/details/" + element.id}>
//                                                             <CardMedia
//                                                                 component="img"
//                                                                 alt="Contemplative Reptile"
//                                                                 height="200"
//                                                                 id="img"
//                                                                 src={element.url}
//                                                             />
//                                                         </Button>
//                                                     </CardActionArea>
//                                                     <CardContent>
//                                                         <Typography gutterBottom variant="h5" component="h2">
//                                                             {element.estate}
//                                                         </Typography>
//                                                         <Typography variant="body2" color="textSecondary" component="p">
//                                                             {element.title}
//                                                         </Typography>
//                                                     </CardContent>
//                                                     <CardContent>
//                                                         <Typography variant="body2" color="textSecondary" component="p">
//                                                             <i class="fas fa-th"> </i>{element.area}
//                                                         </Typography>
//                                                         <Typography variant="body2" color="textSecondary" component="p">
//                                                             <i class="fas fa-hand-holding-usd"></i>${element.rent}
//                                                         </Typography>
//                                                         <Button variant="outlined" color="primary" href={"http://localhost:1337/rent/details/" + element.id}>Details </Button>
//                                                     </CardContent>
//                                                 </Card>
//                                             )
//                                         })
//                                     }
//                                 </div>
//                             </div>
//                         </section>
//                         : <div id="line"><LinearProgress /><LinearProgress color="secondary" /></div>
//                 }
//                 <Footer />
//             </div>
//         )
//     }
// }