import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import picture from "./headshot.jpg";

class Headshot extends Component {
    render () {
        return (
            <React.Fragment>
              
                <img className="headshot" src={picture} />
              

            </React.Fragment>
        )
    }
}
export default Headshot;