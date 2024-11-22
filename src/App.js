import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import TeachSkill from './components/TeachSkill';
import LearnSkill from './components/LearnSkill';
import About from './components/About';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './components/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, [window.location.pathname]);

  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
  };

  return (
    <Router>
      <div>
        <header>
          <button className="theme-toggle" onClick={toggleTheme}>Toggle Theme</button>
          <h1>SkillShareU</h1>
          <p>Digital Skill Swap Platform for College Students</p>
          <img src="https://via.placeholder.com/1920x400" alt="Header Background Image" />
          {isLoggedIn ? (
            <LogoutButton setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Link to="/signin">
              <button className="sign-in">Sign In / Sign Up</button>
            </Link>
          )}
        </header>

        <nav>
          
            <Link to="/">Home</Link>
            <Link to="/TeachSkill">Teach a Skill</Link>
            <Link to="/LearnSkill">Learn a Skill</Link>
            <Link to="/About">About Us</Link>
          
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/TeachSkill" element={<TeachSkill />} />
          <Route path="/LearnSkill" element={<LearnSkill />} />
          <Route path="/About" element={<About />} />
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

function LogoutButton({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <button className="sign-in" onClick={handleLogout}>Logout</button>
  );
}

export default App;
