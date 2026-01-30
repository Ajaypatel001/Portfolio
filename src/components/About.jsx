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
                            Hi, I am <strong>Ajay Patel</strong>, an <strong>aspiring AWS & DevOps Engineer</strong> from India.
                            I am passionate about <strong>cloud infrastructure, automation, and modern DevOps practices</strong>.
                        </p>

                        <p>
                            I enjoy working with <strong>AWS, Docker, Terraform, Linux, and Git</strong> to design,
                            deploy, and manage scalable and reliable applications. I also have a strong foundation in
                            <strong> modern web development using React, Node.js, HTML, CSS, and JavaScript</strong>.
                        </p>

                        <p>
                            I have developed several hands-on projects in web development, cloud, and DevOps,
                            gaining practical experience in building scalable and secure applications.
                            I am continuously learning new tools and technologies to enhance my skills
                            and grow as a Cloud & DevOps professional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
