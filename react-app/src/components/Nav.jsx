import React from "react"
import { NavLink } from "react-router-dom";
import logo from '../logo.png';
import "../css/Nav.scss";


export default class Nav extends React.Component {
    render() {
        return (
            <div id="navbar">
              <header>
                <div class="container">
                  <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" ><NavLink exact to='/home'><img src={logo} style={{width:70}}></img></NavLink></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div class="navbar-nav">
                        <a class="nav-item nav-link"><NavLink exact to='/search'>Search </NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/login'>Login</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/test1'>test1</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/test2'>test2</NavLink></a>
                      </div>
                    </div>
                  </nav>
                </div>
              </header>
            </div>
        )
    }
}