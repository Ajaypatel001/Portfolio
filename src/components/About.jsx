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
                            Hi, I am <strong>Ajay Patel</strong>, an <strong>AWS and DevOps Engineering student</strong> from India.
                            I specialize in <strong>cloud infrastructure, automation, and DevOps practices</strong>.
                        </p>

                        <p>
                            I enjoy working with <strong>AWS, Docker, Terraform, Linux, and Git</strong> to design,
                            deploy, and manage scalable and reliable applications. I also have a strong foundation in
                            <strong> modern web development using React, Node.js, HTML, and CSS</strong>.
                        </p>

                        <p>
                            I have built <strong>5+ real-world projects</strong> across web development, cloud, and DevOps,
                            focusing on performance, security, and automation. I am continuously learning new tools
                            and technologies to improve system reliability and scalability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
