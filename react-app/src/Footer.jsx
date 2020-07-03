import React from "react";
import "./css/Footer.scss";
import logo from './logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <html lang="en">
                <div id="footer" >
                    <footer>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4 text-left" style={{ padding: 0 }}>
                                    <img src={logo}></img>
                                    <h5 id="links">Real Estate Rental System</h5>
                                    <p class="lead">Simple and easy-to-use rental system can find roommates for you.
                        </p>
                                </div>
                                <div class="col-md-4 text-left">
                                    <h5 id="links">Links</h5>
                                    <ul>
                                        <li><a href="http://localhost:3000/">Home</a></li>
                                        <li><a href="http://localhost:1337/rent/paginate">Search</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-4 text-left">
                                    <h5>Contact Me</h5>
                                    <p>香港浸會大學吳多泰博士國際中心809房<br></br>
                            Phone: (852) 9047-3975<br></br>
                            E-Mail: <a href="mailto:19413238@life.hkbu.edu.hk">19413238@life.hkbu.edu.hk</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </html>
        )
    }
}