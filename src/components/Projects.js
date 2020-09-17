import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Button from 'react-bootstrap/Button';

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="projects-header">PROJECTS I HAVE CREATED SO FAR...</h1>
        <div className="projects">
          <div className="project-card">
            
            <h3 className="project-name">Front-End Trivia Game</h3>
            <p className="projects-description">A timed, self-scoring trivia game on U.S. History</p>
            
             
            <p>Languages:</p>
            <li>Javascript</li>
           
            
            <p>Other</p>
            <li>HTML</li>
            <li>CSS</li>
           
            <div className="website-buttons">
            <Button variant="outline-light">Deployed Site</Button>{' '}
            <Link to="https://github.com/Afkelly14/Project-4">
            <Button variant="github-link">GitHub</Button>{' '}
            </Link>
            </div>
          
          </div>
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
              <p>Languages:</p>
              <ul>
                <li>Javascript</li>
              </ul>
              </div>
              <div className="frameworks">
              <p>Frameworks:</p>
              <ul>
                <li>React</li>
              </ul>
            </div>
            </div>
            <div className="other-buttons">
              <p>Other:</p>
              <li>Mongoose</li>
              <li>Express</li>
              <li>Node</li>
              <li>HTML</li>
              <li>CSS</li>
              </div>
              <div className="website-buttons">
              <Button variant="outline-light">Deployed Site</Button>{' '}
              <Button variant="github-link">GitHub</Button>{' '}
            </div>
          </div>
          <div className="project-card">
            <h3 className="project-name">Nterflix App</h3>
            <p className="projects-description">
              A full-stack application built using React with the ability to
              add, update or delete movies from the database
            </p>
            <div className="languages-box">
              <div className="languages">
            <p>Languages:</p>
            <ul>
              <li>Javascript</li>
            </ul>
            </div>
            
            <div className="frameworks">
            <p>Frameworks:</p>
            <ul>
              <li>React</li>
            </ul>
            </div>
            </div>
            <div className="other-buttons">
            <p>Other:</p>
            <li>Mongoose</li>
            <li>Express</li>
            <li>Node</li>
            <li>HTML</li>
            <li>CSS</li>
            </div>
            <div className="website-buttons">
              <div className="Nterflix-flex">
            <Link to="https://butterfly1of4.github.io/">
            <Button variant="outline-light">Deployed Site</Button>{' '}
            </Link>
            <Link to="https://github.com/butterfly1of4/project8-frontend">
              <Button variant="github-link">GitHub <br />Front-End</Button>
            </Link>
            <Link to="https://github.com/butterfly1of4/project8-backend">
            <Button variant="github-link-back-end">GitHub <br />Back-End</Button>
            </Link>
            </div>
            </div>
          </div>
          <div className="project-card">
            <h3 className="project-name">Statistics Without Borders</h3>
            <p className="projects-description">
              Created a non-profit website based on a mock-up from UI designers
              with a team of 12
            </p>
            <div className='languages-box'>
              <div className="languages">
            <p>Languages:</p>
            <ul>
              <li>Javascript</li>
              <li>Python</li>
            </ul>
            </div>
            
            <div className="frameworks">
            <p>Frameworks:</p>
            <ul>
              <li>React</li>
              <li>Django</li>
            </ul>
            </div>
            </div>
            <div className="other-buttons">
            <p>Other:</p>
            <li>Mongoose</li>
            <li>Express</li>
            <li>Node</li>
            <li>HTML</li>
            <li>CSS</li>
            </div>
            <div className="website-buttons">
            <Link to="https://swbapp.netlify.app/">
            <Button variant="outline-light">Deployed Site</Button>{' '}
            </Link>
            <Button variant="github-link">GitHub</Button>{' '}
           
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Projects;
