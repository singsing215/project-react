import React from "react"
import { NavLink } from "react-router-dom";
import logo from '../logo.png';
import "../css/Nav.scss";


export default class Nav extends React.Component {
  render() {
    return (
      <div id="navbar">
        <header>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light" id="nav">
              <NavLink className="navbar-brand" exact to='/home'><img src={logo} alt={"alt"} style={{ width: 70 }}></img></NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink className="nav-item nav-link" exact to='/browse'>Browse</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink className="nav-item nav-link" exact to='/search'>Search</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink className="nav-item nav-link" exact to='/login'>Login</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink className="nav-item nav-link" exact to='/test1'>test1</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink className="nav-item nav-link" exact to='/test2'>test2</NavLink>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}