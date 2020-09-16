import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Nav from "./Nav";
import picture from "./headshot.jpg";

class Headshot extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="headshot-crop">
                <img className="headshot" src={picture} />
                </div>

            </React.Fragment>
        )
    }
}
export default Headshot;