import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

class Projects extends Component {
    render () {
        return (
            <React.Fragment>
            <h1>PROJECTS I HAVE CREATED SO FAR...</h1>
            <div className="projects">
            <div className="project-card">
            <h3>Front-End Trivia Game</h3>
            <p>A timed, self-scoring trivia game</p>
            <p>Languages:</p>
            <li>Javascript</li>
            
            <p>Other</p>
            <li>HTML</li>
            <li>CSS</li>
            </div>
            <div className="project-card">
            <h3>The Cocktail Database</h3>
            <h4>Full Stack Application</h4>
            <p>A full-stack application using <a className="API-Link"href="https://www.thecocktaildb.com/api.php">The CocktailDB API</a> to show certain cocktails and instructions as well as create and delete cocktails</p>
            <p>Languages:</p>
            <ul>
                <li>Javascript</li>
                
            </ul>
            <p>Frameworks:</p>
            <ul>
                <li>React</li>
            </ul>
    
            <p>Other:</p>
            <li>Mongoose</li>
            <li>Express</li>
            <li>Node</li>
            <li>HTML</li>
            <li>CSS</li>
            </div>
            <div className="project-card">
            <h3>Nterflix App</h3>
            <p>A full-stack application built using React with the ability to add, update or delete movies from the database</p>
            <p>Languages:</p>
            <ul>
                <li>Javascript</li>
                
            </ul>
            <p>Frameworks:</p>
            <ul>
                <li>React</li>
            </ul>
    
            <p>Other:</p>
            <li>Mongoose</li>
            <li>Express</li>
            <li>Node</li>
            <li>HTML</li>
            <li>CSS</li>
            </div>
            <div className="project-card">
            <h3>Statistics Without Borders</h3>
            <p>Created a non-profit website based on a mock-up from UI designers with a team of 12</p>
            <p>Languages:</p>
            <ul>
                <li>Javascript</li>
                <li>Python</li>
            </ul>
            <p>Frameworks:</p>
            <ul>
                <li>React</li>
                <li>Django</li>
            </ul>
    
            <p>Other:</p>
            <li>Mongoose</li>
            <li>Express</li>
            <li>Node</li>
            <li>HTML</li>
            <li>CSS</li>
            </div>
            </div>
            </React.Fragment>
        )
    }
}
export default Projects;