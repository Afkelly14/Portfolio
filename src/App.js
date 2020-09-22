import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Router } from "react-router";
import "./App.css";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/projects" exact component={Projects} />

        {/* <Footer /> */}
      </div>
    );
  }
}
export default App;
