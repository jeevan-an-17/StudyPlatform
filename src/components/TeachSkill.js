import React, { useState } from 'react';
import './App.css';

const TeachSkill = () => {
  const [formData, setFormData] = useState({
    name: '',
    skill: '',
    description: '',
    availability: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/teach-skill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', skill: '', description: '', availability: '' });
      } else {
        alert('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <br />
      <br />
      <center>
        <h2>Submit Your Details</h2>
      </center>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="skill">Skill to Teach</label>
          <input
            type="text"
            id="skill"
            name="skill"
            placeholder="E.g., Web Development, Photography"
            required
            value={formData.skill}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Skill Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="Provide a brief description of the skill"
            required
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="availability">Availability</label>
          <input
            type="text"
            id="availability"
            name="availability"
            placeholder="E.g., Weekdays 6-8 PM"
            required
            value={formData.availability}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <footer>
        <p>&copy; 2024 SkillShareU. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TeachSkill;
