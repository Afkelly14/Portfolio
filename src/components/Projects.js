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
      <React.Fragment>
        
        <h1>Projects</h1>
        <h3><i>Hover</i> to see more</h3>
        <div className="projectflex">
        
        <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={CocktailAPI} alt="" />
        <div class="overlay">
            <h2>Cocktail Database</h2>
            <p></p>
            <a class="info" href="#">Github</a>
            <a class="info" href="#">Deployed Site</a>
        </div>
      </div>
      </div>
     
    
      <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={Trivia} alt="" />
        <div class="overlay">
            <h2>U.S History Trivia</h2>
            <a class="info" href="#">Github</a>
            <a class="info" href="#">Deployed Site</a>
        </div>
      </div>
      </div>

      <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={Cryptocurrency} alt="" />
        <div class="overlay">
            <h2>Cryptocurrency</h2>
            <a class="info" href="#">Github</a>
            {/* <a class="info" href="#">Deployed Site</a> */}
        </div>
      </div>
      </div>

      <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={Nterflix} alt="" />
        <div class="overlay">
            <h2>Nterflix</h2>
            <a class="info" href="#">Github</a>
            <a class="info" href="#">Deployed Site</a>
        </div>
      </div>
      </div>

      <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={comingsoon} alt="" />
        <div class="overlay">
            <h2>Python Spotify Playlist</h2>
            <a class="info" href="#">Github</a>
            {/* <a class="info" href="#">Deployed Site</a> */}
        </div>
      </div>
      </div>

      </div>
      
      </React.Fragment>
      
    );
  }
}
export default Projects;
