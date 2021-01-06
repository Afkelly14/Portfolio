import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Headshot from "./Headshot";
import { ExternalLink } from "react-external-link";
import Button from 'react-bootstrap/Button';
import { MDBBtn } from "mdbreact";


class About extends Component {
    render () {
        return (
            <React.Fragment>
            <div className='aboutbackground'>
                <div className='aboutflex'>
                    <div className='about_text_flex'>
                        <p className="hey">Hey!</p>
                <p>I am a full stack developer who is always pursuing new challenges.</p>
                <p>My prior graphics design experience has given me an eye for design when developing websites</p>
             <p>Currently, I am seeking full-time employment in programming. </p>
             <p>Please add me on <ExternalLink href="https://www.linkedin.com/in/alexkelly14/">LinkedIn</ExternalLink> or contact me for opportunities</p>
             <Button target="_blank" href="https://drive.google.com/file/d/1OI6rIw_X6a_Jd4erLGKWjQsTf_1pFMME/view?usp=sharing" variant="outline-info">Resume</Button>{' '}
             </div>           
              <div className="image_blur"><Headshot /></div> 
            </div>
            </div>
            </React.Fragment>
        )
    }
}

export default About;