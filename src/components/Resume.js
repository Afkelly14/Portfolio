import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";


class Resume extends Component {
    render () {
        return (
            <React.Fragment>
            <h1>Alexandra Kelly</h1>
            <h3>Full Stack Developer</h3>
            <button>
            <a target="_blank" href="https://drive.google.com/file/d/17lKFsn3vTWpsDPhg0nAJ3g0knMjfuf0E/view?usp=sharing">Resume</a></button>
            </React.Fragment>
        )
    }
}
export default Resume;