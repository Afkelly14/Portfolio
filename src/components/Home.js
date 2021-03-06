import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Geometricshape from "../images/geometricshape.png";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='homebackground'>
        <div className='homelayout'>
        <h1 className="name">Alexandra Kelly</h1>
        <h2 className="title"> // Full Stack Software Developer / Washington, D.C. //</h2>
        <div className="homeimage">
        <img src={Geometricshape} alt="shape" />
        </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
