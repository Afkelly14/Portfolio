import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Nav from "./Nav";
import Headshot from "./Headshot";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="contact-flex-1">
        <h1>Alexandra Kelly</h1>

        <h2>Full Stack Software Engineer</h2>
        </div>
        <div className="contact-flex-2">
        <div><Headshot /></div>
       
       <div className="contact-flex-3">
          <h3>Washington, D.C. Metro Area</h3>
          <h3>
            Contact Me:    {" "}
            <a href="mail to:afkelly14@gmail.com">afkelly14@gmail.com</a>
          </h3>
          </div>
          </div>
     
      </React.Fragment>
    );
  }
}
export default Contact;
