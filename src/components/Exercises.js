import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Calculator from "../images/calculator.png";
import ImageScraping from "../images/imagescraping.png";
import Button from "react-bootstrap/Button";

class Exercises extends Component {
    render() {
        return (
            <React.Fragment>
                
                <h1 className="projects-header">Exercises</h1>
                <div className="exercises-flex">
                <div className="exercises-card">
                <h2 className="project-name">Python Calculator</h2>
                <p className="projects-description">A simple to use calculator in the terminal!</p>
                <div className="languages">
              <p className="language-title">Languages:</p>
              <li>Python</li>
            </div>
            <div className="exercise-github">
              <a target="_blank" href="https://github.com/Afkelly14/python-cli-calculator">
                <Button variant="github-link">GitHub</Button>{" "}
              </a>
          </div>
                </div>
                <img className="exercises-image" src={Calculator}/>
                </div>
                <div className="exercises-flex">
                <div className="exercises-card">
                <h2 className="project-name">Web Scraping</h2>
                <p className="projects-description">A program to allow the user to search bing.com from the terminal and scrape the first page of results into its own folder</p>
                <div className="languages">
                <p className="language-title">Languages:</p>
              <li>Python</li>
              </div>
              <div className="exercise-github">
                <a target="_blank" href="https://github.com/Afkelly14/web-scraping">
                <Button variant="github-link">GitHub</Button>{" "}
              </a>
              </div>
                </div>
                <img className="exercises-image" src={ImageScraping}/>
               
                </div>
            </React.Fragment>
        )
    }
}

export default Exercises