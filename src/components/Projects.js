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
        <h1 className="projects-header"> Applications I have created.....</h1>
        <div className="project-flex">
          <div className="project-card">
            <h3 className="project-name">Front-End Trivia Game</h3>
            <p className="projects-description">
              A timed, self-scoring trivia game on U.S. History
            </p>

            <div className="languages">
              <p className="language-title">Languages:</p>
              <li>Javascript</li>
            </div>
            <div className="other-buttons">
              <p className="language-title">Other</p>
              <li>HTML</li>
              <li>CSS</li>
            </div>
            <div className="website-buttons">
              <a target="_blank" href="https://afkelly14.github.io/Project-4/">
                <Button variant="outline-light">Deployed Site</Button>{" "}
              </a>
              <a target="_blank" href="https://github.com/Afkelly14/Project-4">
                <Button variant="github-link">GitHub</Button>{" "}
              </a>
            </div>
          </div>
       
            <img className="project-image" src={Trivia} />
            </div>
            <div className="project-flex">
          <div className="project-card">
            <h3 className="project-name">The Cocktail Database</h3>

            <p className="projects-description">
              A full-stack application using{" "}
              <a
                className="API-Link"
                href="https://www.thecocktaildb.com/api.php"
              >
                The CocktailDB API
              </a>{" "}
              to display cocktails and instructions as well as the ability to
              create and delete cocktails
            </p>
            <div className="languages-box">
              <div className="languages">
                <p className="language-title">Languages:</p>
                <ul>
                  <li>Javascript</li>
                </ul>
              </div>
              <div className="frameworks">
                <p className="language-title">Frameworks:</p>
                <ul>
                  <li>React</li>
                </ul>
              </div>
            </div>
            <div className="other-buttons">
              <p className="language-title">Other:</p>
              <li>Mongoose</li>
              <li>Express</li>
              <li>Node</li>
              <li>HTML</li>
              <li>CSS</li>
            </div>

            <div className="Link-flex">
              <a
                target="_blank"
                href="https://cocktail-api-front-end-git-master.afkelly14.vercel.app/"
              >
                <Button variant="outline-light">Deployed Site</Button>{" "}
              </a>
              <a
                target="_blank"
                href="https://github.com/Afkelly14/cocktail-api-front-end"
              >
                <Button variant="github-link">
                  GitHub <br />
                  Front-End
                </Button>
              </a>
              <a target="_blank" href="https://github.com/Afkelly14/Project-6">
                <Button variant="github-link-back-end">
                  GitHub <br />
                  Back-End
                </Button>
              </a>
            </div>
          </div>
         
            <img className="project-image" src={CocktailAPI} />
            </div>
            <div className="project-flex">
            <div className="project-card">
            <h3 className="project-name">Cryptocurrency Markets</h3>
            <p className="projects-description">
              An application showing Cryptocurrency Information, US Markets and Foreign Exchange Markets derived from {" "}
              <a
                className="API-Link"
                href="https://rapidapi.com/Coinranking/api/coinranking1/details"
              >
                The CoinRanking API
              </a>{" "}
            </p>
            <div className="languages-box">
              <div className="languages">
                <p className="language-title">Languages:</p>
                <ul>
                  <li>Javascript</li>
                </ul>
              </div>
              <div className="frameworks">
                <p className="language-title">Frameworks:</p>
                <ul>
                  <li>React</li>
                </ul>
              </div>
            </div>
            <div className="other-buttons">
              <p className="language-title">Other:</p>
              <li>Bootstrap</li>
              
            </div>
            <div className="website-buttons">
              {/* <a target="_blank" href="https://afkelly14.github.io/Project-4/">
                <Button variant="outline-light">Deployed Site</Button>{" "}
              </a> */}
              <a target="_blank" href="https://github.com/Afkelly14/stock_market">
                <Button variant="github-link">GitHub</Button>{" "}
              </a>
            </div>
          </div>
          <img className="project-image" src={Cryptocurrency} />
          </div>
          <div className="project-flex">
            <div className="project-card">
            <h3 className="project-name">Spotify Playlist Generator</h3>
            <p className="projects-description">
              An application to create a Spotify playlist of the top songs from {" "}
              <a
                className="API-Link"
                href="https://developer.spotify.com/"
              >
                The Spotify API
              </a>{" "}
              and add it to a users personal Spotify
            </p>
            <div className="languages-box">
              <div className="languages">
                <p className="language-title">Languages:</p>
                <ul>
                  <li>Python</li>
                </ul>
              </div>
              <div className="frameworks">
                <p className="language-title">Frameworks:</p>
                <ul>
                  <li>Django</li>
                </ul>
              </div>
            </div>
            {/* <div className="other-buttons">
              <p className="language-title">Other:</p>
              <li>Bootstrap</li>
              
            </div> */}
            <div className="website-buttons">
              {/* <a target="_blank" href="https://afkelly14.github.io/Project-4/">
                <Button variant="outline-light">Deployed Site</Button>{" "}
              </a> */}
              <a target="_blank" href="https://github.com/Afkelly14/spotify">
                <Button variant="github-link">GitHub</Button>{" "}
              </a>
            </div>
          </div>
          <img className="project-image" src={comingsoon} />
          </div>
         <div className="project-flex">
          <div className="project-card">
            <h3 className="project-name">Nterflix App</h3>
            <p className="projects-description">
              A full-stack application built using React with the ability to
              add, update or delete movies from the database
            </p>
            <div className="languages-box">
              <div className="languages">
                <p className="language-title">Languages:</p>
                <ul>
                  <li>Javascript</li>
                </ul>
              </div>
              <div className="frameworks">
                <p className="language-title">Frameworks:</p>
                <ul>
                  <li>React</li>
                </ul>
              </div>
            </div>
            <div className="other-buttons">
              <p className="language-title">Other:</p>
              <li>Mongoose</li>
              <li>Express</li>
              <li>Node</li>
              <li>HTML</li>
              <li>CSS</li>
            </div>

            <div className="Link-flex">
              <a
                target="_blank"
                href="https://butterfly1of4.github.io/project8-frontend/"
              >
                <Button variant="outline-light">Deployed Site</Button>{" "}
              </a>
              <a
                target="_blank"
                href="https://github.com/butterfly1of4/project8-frontend"
              >
                <Button variant="github-link">
                  GitHub <br />
                  Front-End
                </Button>{" "}
              </a>
              <a
                target="_blank"
                href="https://github.com/butterfly1of4/project8-backend"
              >
                <Button variant="github-link-back-end">
                  GitHub <br />
                  Back-End
                </Button>
              </a>
            </div>
           </div>
            <img className="project-image" src={Nterflix} />
           
          </div>
          <div className="project-flex">
          <div className="project-card">
            <h3 className="project-name">Statistics Without Borders</h3>
            <p className="projects-description">
              Created a non-profit website based on a mock-up from UI designers
              with a team of 12
            </p>
            <div className="languages-box">
              <div className="languages">
                <p className="language-title">Languages:</p>
                <ul>
                  <li>Javascript</li>
                  <li>Python</li>
                </ul>
              </div>

              <div className="frameworks">
                <p className="language-title">Frameworks:</p>
                <ul>
                  <li>React</li>
                  <li>Django</li>
                </ul>
              </div>
            </div>
            <div className="other-buttons">
              <p className="language-title">Other:</p>
              <li>Mongoose</li>
              <li>Express</li>
              <li>Node</li>
              <li>HTML</li>
              <li>CSS</li>
            </div>
            <div className="website-buttons">
              <a target="_blank" href="https://swbapp.netlify.app/">
                <Button variant="outline-light">Deployed Site</Button>{" "}
              </a>
              <a
                target="_blank"
                href="https://github.com/statisticswithoutborders/swb-app"
              >
                <Button variant="github-link">GitHub</Button>{" "}
              </a>
            </div>
          </div>
         
            <img className="project-image" src={SWB} />
       
            </div>
      </React.Fragment>
    );
  }
}
export default Projects;
