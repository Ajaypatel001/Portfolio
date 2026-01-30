import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">

            <p>
              Hi, I am <strong>Ajay Patel</strong>, an aspiring 
              <strong> AWS & DevOps Engineer</strong> from India. I am passionate about 
              <strong> cloud infrastructure, automation, and modern DevOps practices</strong>.
            </p>

            <p>
              I enjoy working with <strong>AWS, Docker, Terraform, OpenTofu, Linux, Git, and GitHub</strong> 
              to design, deploy, and manage scalable and reliable applications.
              I have hands-on experience with <strong>CI/CD tools</strong> such as 
              <strong> Jenkins, GitHub Actions, and GitLab CI/CD</strong>, enabling faster 
              and more efficient software delivery.
            </p>

            <p>
              Additionally, I have a strong foundation in modern web development using 
              <strong> React, Node.js, HTML, CSS, and JavaScript</strong>. 
              I have built multiple hands-on projects across web development, cloud, and DevOps, 
              gaining practical experience in developing scalable and secure applications.
            </p>

            <p>
              I am a continuous learner who is always exploring new tools and technologies 
              to enhance my expertise and grow as a Cloud & DevOps professional.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
