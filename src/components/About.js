import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Headshot from "./Headshot";
import { ExternalLink } from "react-external-link";

class About extends Component {
    render () {
        return (
            
            <div className='aboutbackground'>
                <div className='aboutflex'>
                    <div className='about_text_flex'>
                        <p className="hey">Hey!</p>
                <p>I am a full stack developer who is always pursuing new challenges.</p>
                <p>My prior graphics design experience has given me an eye for design when developing websites</p>
             <p>Currently, I am seeking full-time employment in programming. </p>
             <p>Please add me on <ExternalLink href="https://www.linkedin.com/in/alexkelly14/">LinkedIn</ExternalLink> or contact me for opportunities</p>
             </div>           
              <div className='headshot'><Headshot /></div> 
            </div>
            </div>

        )
    }
}

export default About;