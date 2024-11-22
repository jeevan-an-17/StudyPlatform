import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Photography from './images/photography-thumbnail.jpeg' ;
import WebDev from './images/web-dev-thumnail.jpeg' ;



const MainPage = () => {

  const [date, setDate] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null); // Reset error message

  
  };

  return (
  <div>
    <div className="container">
        <div className="main-content">
            <h1>Welcome to SkillShareU</h1>
            <p>Fostering a peer-to-peer learning community where students can share their skills and learn new ones.</p>

            <h2>Popular Skills</h2>
            <div className="card" >
                <img src={WebDev} alt="Web Development" />
                <h3>Web Development</h3>
                <p>Learn the basics of HTML, CSS, and JavaScript.</p>
            </div>
            <div className="card" >
                <img src={Photography} alt="Photography" />
                <h3>Photography</h3>
                <p>Master the fundamentals of photography, composition, and editing.</p>
            </div>
        </div>

        <div className="sidebar">
            <h2>Upcoming Workshops</h2>
            <ul>
                <li>Intro to Python - Dec 12, 2024</li>
                <li>Photography Tips - Dec 15, 2024</li>
                <li>Photoshop Basics - Dec 18, 2024</li>
                <li>Chemistry - Dec 17, 2024</li>
            </ul>

            <h2>Connect with Us</h2>
            <p>Join our community on social media and stay updated with upcoming events.</p>
            <br/><br/>
            
                
                
                
                email : skillshareu@gmail.com || Phone no : 76371 - 12892

            
                
            
        </div>
    </div>

   

    <footer>
        <p>&copy; 2024 SkillShareU. All rights reserved.</p>
    </footer>

  </div>
  );
};

export default MainPage;
