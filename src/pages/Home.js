import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className='home'>
            <h1 className='hero-title'>Full-Stack Web Developer</h1>
            <h3 className='hero-desc'>Hi, I'm Danny Nieves. I'm a web developer who loves to help small businesses, agencies, and individuals turn their ideas into living, breathing web applications. </h3>
            <h6 className='about-me'>I started my career in the Hospitality industry, and over 10 years I worked my way up the ranks to finally become an event producer. Unfortunately I hadn't planned for a global pandemic, and the Event Production industry was hit hard. Knowing an opportunity when I see one, I siezed the chance to go back to school and become a Web Developer. I'm happy to be able to apply my project management skills and attention to detail to the tech industry. Now I cater to my clients with lines of code!</h6>
            <h6 className='contact-text'>Feel free to&ensp;<Link to='/contact'>contact me</Link>&ensp;if you have any questions!</h6>
        </div>
    )
};

export default Home;