import React, { useState } from 'react';
import './App.css';
import './video.css';
import MLImage from './images/ML-logo.png';
import JavaLogo from './images/java-logo.jpeg';
import Graphic from './images/graphic-design-thumbnail.png';
import CPP from './images/cpp-logo.jpeg';
import Photography from './images/photography-thumbnail.jpeg';
import WebDev from './images/web-dev-thumnail.jpeg';
import frontend from './videos/WebDev.mp4';
import cppVideo from './videos/Cpp.mp4';
import javaTutorial from './videos/Java.mp4';
import design from './videos/GraphicDesign.mp4';
import machineLearning from './videos/ML.mp4';
import photo from './videos/Photography.mp4';

const LearnSkill = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const openVideo = (videoSrc) => {
    if (!videoSrc) {
      console.error('Video source is invalid or undefined');
      return;
    }
    setCurrentVideo(videoSrc);
    setModalOpen(true);
  };

  const closeVideo = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <center>
        <h2>Learning Opportunities</h2>
      </center>
      <div className="skill">
        {/* Thumbnails */}
        <div className="card" onClick={() => openVideo(frontend)}>
          <img src={WebDev} alt="Web Development" />
          <h3>Web Development</h3>
          <p>Learn the basics of HTML, CSS, and JavaScript.</p>
        </div>
        <div className="card" onClick={() => openVideo(photo)}>
          <img src={Photography} alt="Photography" />
          <h3>Photography</h3>
          <p>Master the fundamentals of photography, composition, and editing.</p>
        </div>
        <div className="card" onClick={() => openVideo(design)}>
          <img src={Graphic} alt="Graphic Design" />
          <h3>Graphic Design</h3>
          <p>Create beautiful visuals and designs using tools like Photoshop and Illustrator.</p>
        </div>
        <div className="card" onClick={() => openVideo(cppVideo)}>
          <img src={CPP} alt="C++ logo" />
          <h3>C++</h3>
          <p>Complete C++ Tutorial | Beginner To Advance | Basics Of C++ Programming</p>
        </div>
        <div className="card" onClick={() => openVideo(javaTutorial)}>
          <img src={JavaLogo} alt="Java Logo" />
          <h3>Java</h3>
          <p>Java Tutorial from scratch | DSA course for Placements</p>
        </div>
        <div className="card" onClick={() => openVideo(machineLearning)}>
          <img src={MLImage} alt="Machine Learning" />
          <h3>Machine Learning</h3>
          <p>Machine Learning Full Course - Learn Machine Learning | Machine Learning Tutorial</p>
        </div>
      </div>

      {/* Modal */}
      <div id="videoModal" className={isModalOpen ? 'modal show' : 'modal'}>
        <div className="modal-content">
          <span className="close" onClick={closeVideo}>
            &times;
          </span>
          <video controls id="videoPlayer" autoPlay>
            {currentVideo ? (
              <source src={currentVideo} type="video/mp4" />
            ) : (
              <p>Video not available</p>
            )}
            Your browser does not support the video tag.
          </video>

        </div>
      </div>

      <footer>
        <p>&copy; 2024 SkillShareU. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LearnSkill;
