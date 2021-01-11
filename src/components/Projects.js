import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CocktailAPI from "../images/CocktailAPI.png";
import Nterflix from "../images/Nterflix.png";
import SWB from "../images/SWB.png";
import Trivia from "../images/Trivia.png";
import Cryptocurrency from "../images/Cryptocurrency.png";
import comingsoon from "../images/comingsoon.png";
import { Fade } from "reactstrap";


function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}


class Projects extends Component {
  render() {
    return (
      <React.Fragment>
       <div className="projects_background">
        <h1 className="projects_title">Projects</h1>
        
        <h2 className="projects_hover"><i>Hover</i> to see more</h2>
        <FadeInSection>
        <div className="projectflex">
       
        <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={CocktailAPI} alt="The Cocktail Database" />
        <div class="overlay">
            <h2 className="ptitle">Cocktail Database</h2>
            <p className="project_info">A database of cocktails, their ingredients, type of glass and how to make them</p>
            <a class="info" target="_blank" href="https://github.com/Afkelly14/cocktail-api-front-end">Github</a>
            <a class="info" target="_blank" href="https://cocktail-api-front-end.vercel.app/">Deployed Site</a>
        </div>
      </div>
      </div>
     
    
      <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={Trivia} alt="US History Trivia" />
        <div class="overlay">
            <h2 className="ptitle">U.S History Trivia</h2>
            <p className="project_info">A timed trivia to test your U.S. History knowledge</p>
            <a class="info" target="_blank" href="https://github.com/Afkelly14/Project-4">Github</a>
            <a class="info" target="_blank" href="https://afkelly14.github.io/Project-4/">Deployed Site</a>
        </div>
      </div>
      </div>

      <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={Cryptocurrency} alt="Cryptocurrency" />
        <div class="overlay">
            <h2 className="ptitle">Cryptocurrency</h2>
            <p className="project_info">A webpage showing real-time prices and information from The Cryptocurrency API</p>
            <a class="info" target="_blank" href="https://github.com/Afkelly14/stock_market">Github</a>
            {/* <a class="info" href="#">Deployed Site</a> */}
        </div>
      </div>
      </div>

      <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={Nterflix} alt="Nterflix" />
        <div class="overlay">
            <h2 className="ptitle">Nterflix</h2>
            <p className="project_info">A website displaying movie titles from the Unofficial Netflix API with full CRUD functionality</p>
            <a class="info" target="_blank" href="https://github.com/butterfly1of4/project8-frontend">Github</a>
            <a class="info" target="_blank" href="https://jenniferhouck.com/project8-frontend/">Deployed Site</a>
        </div>
      </div>
      </div>

      <div class="project_image">
       <div class="hovereffect">
        <img class="img-responsive" src={comingsoon} alt="Python Spotify" />
        <div class="overlay">
            <h2 className="ptitle">Python Spotify Playlist</h2>
            <p className="project_info">An application using Python and the Spotify API to show the top trending songs then add them as a playlist on spotify</p>
            <a class="info" target="_blank" href="https://github.com/Afkelly14/spotify">Github</a>
            {/* <a class="info" href="#">Deployed Site</a> */}
        </div>
      </div>
      </div>

      </div>
      </FadeInSection>
      </div>
     
      </React.Fragment>
      
    );
  }
}
export default Projects;
