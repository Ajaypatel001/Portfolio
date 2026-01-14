import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="logo-area">
                    <a href="#" className="logo">Portfolio</a>
                </div>

                <div className="nav-controls">
                    <div className="nav-actions">
                        {/* New Analytics/Info Trigger */}
                        <button className="nav-icon-btn" aria-label="View Analytics" onClick={() => setShowModal(true)}>
                            <i className="fas fa-eye"></i>
                        </button>

                     
                        <a href="https://github.com/Ajaypatel001" target="_blank" rel="noreferrer" className="nav-icon-btn" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <button className="nav-icon-btn theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                            {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Analytics Modal Popup */}
            {showModal && (
                <div className="info-modal-overlay">
                    <div className="info-modal-content">
                        <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>

                        <h3 className="modal-title">Extra Information</h3>

                        <div className="modal-stat">
                            <span className="stat-label">Total Visitors</span>
                            <span className="stat-value">{parseInt(localStorage.getItem('portfolioViews') || 1200).toLocaleString()}</span>
                        </div>

                        <div className="modal-section-title">Quick Links</div>
                        <div className="modal-actions">
                            <a href="https://github.com/Ajaypatel001" target="_blank" rel="noreferrer" className="modal-btn source">
                                <i className="fab fa-github"></i> View Source Code
                            </a>
                            <a href="#" className="modal-btn portfolio">
                                <i className="fas fa-external-link-alt"></i> Check Out My Other Portfolio
                            </a>
                        </div>

                        <div className="modal-footer">
                            <span>Built with React • Vite • CSS</span>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;