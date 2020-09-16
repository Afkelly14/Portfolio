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
            <Link to="/home">
            <button className="nav-button">Home</button>
            </Link>
            <Link to="/projects">
            <button className="nav-button">Projects</button>
            </Link>
            <Link to="/resume">
            <button className="nav-button">Resume</button>
            </Link>
            <Link to="www.github.com/Afkelly14">
            <button className="nav-button">GitHub</button>
            </Link>
            <Link to="/contact">
            <button className="nav-button">Contact</button>
            </Link>
            </nav>
            </React.Fragment>
        )
    }
}

export default Nav;