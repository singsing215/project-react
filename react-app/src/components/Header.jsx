import React from "react";
import "../css/Header.scss";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Jumbotron';

export default class Header extends React.Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                <div class="container">
                    <h1>Real Estate Rental System</h1>
                    <p>
                        Real Estate Rental Management System is a web-based system to facilitate flatshare and
                        finding roommates.
                    </p>
                    </div>
                </Container>
            </Jumbotron>
        )
    }
}