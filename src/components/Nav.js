import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { ExternalLink } from "react-external-link";

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
          <ExternalLink href="https://drive.google.com/file/d/17lKFsn3vTWpsDPhg0nAJ3g0knMjfuf0E/view">
            <button className="nav-button">Resume</button>
          </ExternalLink>
          <ExternalLink href="https://github.com/Afkelly14">
            <button className="nav-button">GitHub</button>
          </ExternalLink>
          <Link to="/contact">
            <button className="nav-button">Contact</button>
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
