import React, { useState, useEffect } from "react"
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/Button';
import Typography from '@material-ui/core/Button';
import { LinearProgress } from '@material-ui/core';
// import "../css/Search.scss";

// async function submitForm(a) {
//     var response = await fetch("/user/login", {
//         method: "POST",
//         credentials: 'same-origin',
//         body: new FormData(a),
//     });
//     if (response.ok) {
//         var data = await response.json(); // for res.ok() or res.json()
//         alert(data.message);
//         window.location = data.url;
//         // location.reload(true);
//     } else if (response.status == 401) {
//         var data = await response.text(); // for res.send()
//         alert(data);
//     } else {
//         alert(response.statusText);
//     }
// };


const Search = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await fetch("/rent/json");
            const data = await response.json();
            console.log(data)
            setData(data)
            setLoading(false)
        })();
    }, [])


    return (
        <div class="container " id="content">
            <form action="http://localhost:1337/user/login" method="POST" onsubmit="submitForm(this);return false">
                <div class="col-md-6">
                    <div class="form-group ">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter email" name="username" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                            name="password" />
                    </div>
                    <button type="submit" class="btn btn-primary" >Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Search
