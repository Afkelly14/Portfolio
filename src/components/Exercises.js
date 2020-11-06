import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Calculator from "../images/calculator.png";
import ImageScraping from "../images/imagescraping.png";

class Exercises extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="projects-header">Below are exercises to keep my skills fresh...</h1>
                <h2>Python Calculator</h2>
                <p>A simple to use calculator in the terminal!</p>
                <img className="project-image" src={Calculator}/>
                <h2>Web Scraping</h2>
                <p>While using the terminal, search bing.com and automatically scrape the first results page into its own document folder</p>
                <img className="project-image" src={ImageScraping}/>
            </React.Fragment>
        )
    }
}

export default Exercises