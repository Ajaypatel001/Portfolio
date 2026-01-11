import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Web Development",
            icon: "fas fa-code",
            description: "Building responsive, modern, and high-performance web applications using React, Node.js, and other cutting-edge technologies.",
            color: "#61dafb" // React blue-ish
        },
        {
            title: "Cloud Deployment",
            icon: "fas fa-cloud-upload-alt",
            description: "Deploying scalable applications to the cloud, ensuring high availability, fault tolerance, and secure infrastructure.",
            color: "#2596be" // Docker/Cloud blue
        },
        {
            title: "AWS Setup",
            icon: "fab fa-aws",
            description: "Configuring complete AWS environments including EC2, S3, RDS, VPCs, and IAM roles for optimized performance.",
            color: "#ff9900" // AWS Orange
        },
        {
            title: "CI/CD Pipeline",
            icon: "fas fa-infinity", // or fa-sync-alt
            description: "Automating testing, building, and deployment workflows to streamline development and reduce delivery time.",
            color: "#e24329" // GitLab/Jenkins red-ish
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-title">What I Can Do</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card" style={{ '--accent-color': service.color }}>
                            <div className="service-icon-box">
                                <i className={service.icon}></i>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
