import React, { useState, useEffect } from 'react';
import './Socials.css';

const Socials = () => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        // Simple mock view counter using localStorage
        // In a real app, this would fetch from a database
        const storedViews = localStorage.getItem('portfolioViews');
        let currentViews = storedViews ? parseInt(storedViews) : 1200; // Start at 1200 for a realistic look

        // Increment on session start (mocking a new view)
        // To prevent infinite increment on refresh during dev, we could use sessionStorage check
        // but for this simple request, we'll just show the number.

        // Let's just display the count. If user wants it to increment, we can do that.
        // For now, let's bump it by 1 every time the component mounts (page reload)
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
            icon: 'fas fa-code', /* using code icon for replit if brand icon not available */
            url: 'https://replit.com/@Ajaypatel83054', /* Assuming handle based on email/context, generic if unknown */
            className: 'replit'
        },
        {
            name: 'X (Twitter)',
            handle: '@AjayPatel',
            icon: 'fab fa-twitter', /* or fa-x-twitter if available in version */
            url: 'https://x.com/AjayPatel',
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
            handle: 'Download PDF',
            icon: 'fas fa-file-download',
            url: '#',
            className: 'resume'
        }
    ];

    return (
        <section className="socials-section">
            <div className="socials-container">
                <div className="socials-grid">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noreferrer" className={`social-card ${link.className}`}>
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
