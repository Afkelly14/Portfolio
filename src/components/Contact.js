import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Nav from "./Nav";

class Contact extends Component {
    render () {
        return (
            <React.Fragment>
            <h1>Alexandra Kelly</h1>
            <h2>Full Stack Software Engineer</h2>
            <h3>Washington, D.C.</h3>
            <h3>Contact Me: <a href="mail to:afkelly14@gmail.com">afkelly14@gmail.com</a></h3>
            </React.Fragment>
        )
    }
}
export default Contact;