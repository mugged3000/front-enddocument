import React from 'react';
import { Container } from 'react-bootstrap';
  import MyProfile from '/images/DP.jpg'
const About = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'React-Bootstrap', 'Bootstrap', 'Git', 'Responsive Design','Github','Vite'];

  return (
    <section id="about" className="section about">
      <div className="bg-shape bg-circle"></div>
      <div className="bg-shape bg-triangle"></div>
      <Container>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
        
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="about-img">
              <img src={MyProfile} alt="Your Name" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-text">
              <h2>Who am I?</h2>
              <p>I'm a professional front-end developer with 2+ years of experience building modern, responsive websites and web applications. I specialize in creating intuitive user interfaces with clean, efficient code.</p>
              <p>My approach combines technical expertise with an eye for design, ensuring that the websites I build are not only functional but also visually appealing and user-friendly.</p>
              
              <div className="skills mt-5">
                <h3>My Skills</h3>
                <div className="skill-tags d-flex flex-wrap gap-2 mt-3">
                  {skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="stat-item text-center p-4">
              <div className="stat-number">3+</div>
              <div className="stat-text">Projects Completed</div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="stat-item text-center p-4">
              <div className="stat-number">2+</div>
              <div className="stat-text">Years Experience</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-item text-center p-4">
              <div className="stat-number">80%</div>
              <div className="stat-text">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;