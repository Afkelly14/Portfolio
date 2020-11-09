import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Calculator from "../images/calculator.png";
import ImageScraping from "../images/imagescraping.png";
import Button from "react-bootstrap/Button";

class Exercises extends Component {
    render() {
        return (
            <React.Fragment>
                
                <h1 className="projects-header">Python Excercises</h1>
                <div className="exercises-flex">
                <div className="exercises-card">
                <h2>Python Calculator</h2>
                <p>A simple to use calculator in the terminal!</p>
                
              <a target="_blank" href="https://github.com/Afkelly14/python-cli-calculator">
                <Button variant="github-link">GitHub</Button>{" "}
              </a>
          
                </div>
                <img className="project-image" src={Calculator}/>
                </div>
                <div className="exercises-flex">
                <div className="exercises-card">
                <h2>Web Scraping</h2>
                <p>A program to allow user to search from the terminal and scrape the first page of results into its own folder</p>
                <a target="_blank" href="https://github.com/Afkelly14/web-scraping">
                <Button variant="github-link">GitHub</Button>{" "}
              </a>
          
                </div>
                <img className="project-image" src={ImageScraping}/>
               
                </div>
            </React.Fragment>
        )
    }
}

export default Exercises