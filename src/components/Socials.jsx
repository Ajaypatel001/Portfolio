import React, { useState, useEffect } from 'react';
import './Socials.css';

const Socials = () => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        const storedViews = localStorage.getItem('portfolioViews');
        let currentViews = storedViews ? parseInt(storedViews) : 1200;

        const newViews = currentViews + 1;
        localStorage.setItem('portfolioViews', newViews.toString());
        setViews(newViews);
    }, []);

    const socialLinks = [
        {
            name: 'LinkedIn',
            handle: '@Ajay-Patel',
            icon: 'fab fa-linkedin',
            url: 'https://www.linkedin.com/in/ajay-patel-622298318/',
            className: 'linkedin'
        },
        {
            name: 'GitHub',
            handle: '@Ajaypatel001',
            icon: 'fab fa-github',
            url: 'https://github.com/Ajaypatel001',
            className: 'github'
        },
        {
            name: 'Replit',
            handle: '@AjayPatel',
            icon: 'fas fa-code',
            url: 'https://replit.com/@Ajaypatel83054',
            className: 'replit'
        },
        {
            name: 'X (Twitter)',
            handle: '@AjayPatel',
            icon: 'fab fa-twitter',
            url: 'https://x.com/AjaypatelPate16',
            className: 'twitter'
        },
        {
            name: 'GitLab',
            handle: '@Ajaypatel001',
            icon: 'fab fa-gitlab',
            url: 'https://gitlab.com/ap1892503',
            className: 'gitlab'
        },
        {
            name: 'Portfolio Website',
            handle: 'patel.help',
            icon: 'fas fa-globe',
            url: 'https://patel.help',
            className: 'portfolio'
        },
        {
            name: 'Resume',
            handle: 'Download Resume',
            icon: 'fas fa-file-download',
            url: '/Ajay_Patel_DevOps_Resume.pdf', // ✅ file in public folder
            className: 'resume'
        }
    ];

    return (
        <section className="socials-section">
            <div className="socials-container">
                <div className="socials-grid">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target={link.name === "Resume" ? "_self" : "_blank"}
                            rel="noreferrer"
                            className={`social-card ${link.className}`}
                            download={link.name === "Resume"}
                        >
                            <div className="card-content">
                                <div className="card-icon">
                                    <i className={link.icon}></i>
                                </div>
                                <div className="card-text">
                                    <span className="card-title">{link.name}</span>
                                    <span className="card-handle">{link.handle}</span>
                                </div>
                            </div>
                            <div className="card-arrow">
                                <i className="fas fa-external-link-alt"></i>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Socials;
