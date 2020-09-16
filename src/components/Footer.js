import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

class Footer extends Component {
    render () {
        return (
            <div className="footer">
            <div className="footer-text">
            <Link to="/home">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <a href="https://github.com/Afkelly14">GitHub</a>
            <Link to="/contact">Contact</Link>
            </div>
            </div>
        )
    }
}

export default Footer;