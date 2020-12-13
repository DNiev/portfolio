import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <p>Hi, I'm Danny Nieves. I'm a web developer who loves to help small businesses, agencies, and individuals turn their ideas into living, breathing web applications. </p>
            <p>Feel free to <Link to='/contact'>contact me</Link> if you have any questions</p>
        </div>
    )
};

export default Home;