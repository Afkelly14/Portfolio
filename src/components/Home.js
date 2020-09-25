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
        <div className="Welcome-info">
        <p className="Welcome">Welcome to my website! My name is Alexandra Kelly and I am a full-stack software developer. I am a Washington, D.C. native as well as a dual citizen of the United States and England. When I'm not working hard as a developer, I enjoy live music, riding my bike and scary movies!</p>
        <p className="brand">Multi-talented software developer combining technical and sales experience to provide client-focused, straightforward websites.</p>
        </div>
        </div>
        </React.Fragment>
        )
    }
}

export default Home;
