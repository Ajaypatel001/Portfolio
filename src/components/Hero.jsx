
import React from 'react';
import './Hero.css';
import GlowingLogo from './GlowingLogo';
import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <div className="hero-wrapper">
            {/* Animated Background */}
            <div className="hero-background">
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-shape shape-3"></div>
            </div>

            {/* Grid & Pulse UI */}
            <div className="hero-grid-overlay"></div>
            <div className="center-pulse"></div>

            {/* Main Text Content */}
            <div className="hero-content">
                <h1 className="hero-word">POWERING</h1>
                <h1 className="hero-word gradient-text">DEVOPS & CLOUD</h1>
            </div>

            <section id="home" className="hero-profile">
                <div className="container">
                    <div className="profile-card">
                        <div className="profile-header">
                            <div className="glass-logo">
                                <img
                                    src="/Ajay photo.png"
                                    alt="Ajay Patel"
                                    className="profile-pic anti-gravity"
                                />
                            </div>


                            <div className="profile-info">
                                <span className="last-updated">Last updated just now</span>
                                <h2 className="profile-name">
                                    Ajay Patel <i className="fas fa-check-circle verified-badge"></i>
                                </h2>
                                <div className="bio-lines">
                                    <p className="bio-text line-1">AWS & DevOps Engineering Student.</p>
                                    <p className="bio-text line-2">Designing modern cloud infrastructure and automation solutions.</p>
                                    <p className="bio-text line-3">Building scalable and enterprise-grade applications on the cloud.</p>
                                </div>
                            </div>
                        </div>

                        <div className="profile-details-grid">
                            <div className="detail-item">
                                <span className="icon"><i className="fas fa-cloud"></i></span>
                                <span>DevOps & AWS Enthusiast</span>
                            </div>
                            <div className="detail-item">
                                <span className="icon"><i className="fas fa-code"></i></span>
                                <span>Full-Stack Web Developer</span>
                            </div>
                            <div className="detail-item">
                                <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                                <span>India</span>
                            </div>
                            <div className="detail-item">
                                <span className="icon"><i className="fas fa-envelope"></i></span>
                                <a href="mailto:Ajaypatel830544@gmail.com">Ajaypatel830544@gmail.com</a>
                            </div>
                            <div className="detail-item">
                                <span className="icon"><i className="fas fa-globe"></i></span>
                                <a href="#">Ajay.tech</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
