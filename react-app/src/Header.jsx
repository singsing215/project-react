import React from "react";
import "./css/Header.scss";

export default class Header extends React.Component {
    render() {
        return (
            <html lang="en">
                <body>
                    <div id="navbar">
                        <header>
                            <div class="container">
                                <nav class="navbar navbar-expand-lg navbar-light">
                                    <a class="navbar-brand" href="http://localhost:3000/">Home</a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div class="navbar-nav">
                                            <a class="nav-item nav-link" href="http://localhost:1337/rent/paginate">Search </a>
                                        </div>
                                        <div class="navbar-nav">
                                            <a class="nav-item nav-link" href="http://localhost:1337/user/login" id='login'>Login</a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </header>
                    </div>

                    <div id="highlight" class="jumbotron jumbotron-fluid">
                        <upper>
                            <div class="jumbotron">
                                <div class="container">
                                    <div class="col-md-12">
                                        <h1 class="display-4">Real Estate Rental System</h1>
                                        <p class="lead">Real Estate Rental Management System is a web-based system to facilitate flatshare and
                                        finding roommates.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </upper>
                    </div>

                </body>
            </html>
        )
    }
}