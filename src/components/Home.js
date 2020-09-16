import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Nav from "./Nav";
import Headshot from "../components/Headshot";

class Home extends Component {
    render() {
        return (
        <React.Fragment>
            
        <h1 className="name">Alexandra Kelly</h1>
        <h2 className="title">Full Stack Developer</h2>
        <div className="AboutMe">
        <div className="headshot"><Headshot /></div>
        <p className="brand">Multi-talented software developer combining technical and sales experience to provide client-focused, straightforward websites.</p>
        </div>
        </React.Fragment>
        )
    }
}

export default Home;
