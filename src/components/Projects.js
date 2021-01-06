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
       <div className="projects_background">
        <h1 className="projects_title">Projects</h1>
        
        <h2 className="projects_hover"><i>Hover</i> to see more</h2>
     
        <div className="projectflex">
        
        <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={CocktailAPI} alt="The Cocktail Database" />
        <div class="overlay">
            <h2>Cocktail Database</h2>
            <p></p>
            <a class="info" href="https://github.com/Afkelly14/cocktail-api-front-end">Github</a>
            <a class="info" href="https://cocktail-api-front-end.vercel.app/">Deployed Site</a>
        </div>
      </div>
      </div>
     
    
      <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={Trivia} alt="US History Trivia" />
        <div class="overlay">
            <h2>U.S History Trivia</h2>
            <a class="info" href="https://github.com/Afkelly14/Project-4">Github</a>
            <a class="info" href="https://afkelly14.github.io/Project-4/">Deployed Site</a>
        </div>
      </div>
      </div>

      <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={Cryptocurrency} alt="Cryptocurrency" />
        <div class="overlay">
            <h2>Cryptocurrency</h2>
            <a class="info" href="https://github.com/Afkelly14/stock_market">Github</a>
            {/* <a class="info" href="#">Deployed Site</a> */}
        </div>
      </div>
      </div>

      <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={Nterflix} alt="Nterflix" />
        <div class="overlay">
            <h2>Nterflix</h2>
            <a class="info" href="#">Github</a>
            <a class="info" href="#">Deployed Site</a>
        </div>
      </div>
      </div>

      <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={comingsoon} alt="Python Spotify" />
        <div class="overlay">
            <h2>Python Spotify Playlist</h2>
            <a class="info" href="https://github.com/Afkelly14/spotify">Github</a>
            {/* <a class="info" href="#">Deployed Site</a> */}
        </div>
      </div>
      </div>

      </div>
      
      </div>
      </React.Fragment>
      
    );
  }
}
export default Projects;
