import React from 'react';
import ProPic from './../../../Images/ProfilePic.png';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='circular'>
                <img src={ProPic} alt="" />
            </div>
            <div className='justify'>
                <h2>Md. Zillur Rahman</h2>
                <h5>I want to be an Front End Web Developer. Right Now, I am learning about Web Developing. I have knowledge about HTML, CSS, XML, NodeJS, BootStrap, Tailwind, JAVASCRIPT, firebase, REACT. I am working hard to know more about this field.
                </h5>
            </div>
        </div >
    );
};

export default About;