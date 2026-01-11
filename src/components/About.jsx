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
                            Hi, I am Ajay. I am an <strong>AWS and DevOps Engineering student</strong> focused on cloud infrastructure, automation, and modern web technologies.
                            I enjoy working with <strong>Docker, Terraform, and AWS</strong> to build and deploy production-ready applications.
                        </p>
                        <p>
                            I am always learning new tools to improve performance, reliability, and scalability, and I also have strong web development skills. I have built 5+ real-world projects across web development, cloud, and DevOps.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
