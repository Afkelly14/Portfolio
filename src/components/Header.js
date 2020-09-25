import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";


class Header extends Component {
    render () {
        return (
            <React.Fragment>
                <Link to="/home">
            <h1 className="header">Alexandra Kelly</h1></Link>
            </React.Fragment>
        )
    }
}
export default Header;