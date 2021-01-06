import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CocktailAPI from "../images/CocktailAPI.png";
import Nterflix from "../images/Nterflix.png";
import SWB from "../images/SWB.png";
import Trivia from "../images/Trivia.png";
import Cryptocurrency from "../images/Cryptocurrency.png";
import comingsoon from "../images/comingsoon.png";

class Projects extends Component {
  render() {
    return (
        <div class="project_image">
      <div class="hovereffect">
        <img class="img-responsive" src="http://placehold.it/350x200" alt="" />
        <div class="overlay">
            <h2>Hover effect 2</h2>
            <a class="info" href="#">Github</a>
            <a class="info" href="#">Deployed Site</a>
        </div>
      </div>
      </div>
    
      
      
      
    );
  }
}
export default Projects;
