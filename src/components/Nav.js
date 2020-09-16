import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            // <nav className="nav-bar">
           
            // <Link to="/home">Home</Link>
            // <Link to="/projects">Projects</Link>
            // <Link to="/resume">Resume</Link>
            // <a href="https://github.com/Afkelly14">GitHub</a>
            // <Link to="/contact">Contact</Link>
          
          
            // </nav>
            <React.Fragment>
                <nav className="nav-bar">
            <button className="nav-button">Home</button>
            <button className="nav-button">Projects</button>
            <button className="nav-button">Resume</button>
            <button className="nav-button">GitHub</button>
            <button className="nav-button">Contact</button>
            </nav>
            </React.Fragment>
        )
    }
}

export default Nav;