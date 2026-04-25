import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [visible, setVisible] = useState(3);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    // Reordered list: DevOps/Cloud first
    const projectList = [

        // ✅ NEW Terraform Project (Added on Top)
        {
            title: "Three-Tier Books Application (Terraform Deployment)",
            category: "Cloud & DevOps | Full Stack",
            description: "Automated deployment of a full-stack three-tier Books application on AWS using Terraform and Infrastructure as Code (IaC).",
            details: {
                why: "To automate cloud infrastructure provisioning and reduce manual configuration by implementing Infrastructure as Code with Terraform.",

                features: [
                    "Infrastructure provisioning using Terraform (IaC)",
                    "Three-tier architecture with Frontend, Backend, and RDS",
                    "Auto Scaling for high availability",
                    "Application Load Balancer for traffic distribution",
                    "Secure VPC with public and private subnets",
                    "Internet Gateway for external connectivity",
                    "Security Groups for secure access control",
                    "Target Groups for efficient routing",
                    "AWS Lambda for serverless tasks",
                    "S3 for storage and backups"
                ],

                techStack: "Terraform, AWS (EC2, S3, RDS, Lambda, VPC, Security Groups, Target Groups, Internet Gateway, Load Balancer, IAM), Linux, Git, Full Stack"
            },

            tech: [
                "Terraform",
                "AWS",
                "Full Stack",
                "EC2",
                "S3",
                "RDS",
                "Lambda",
                "VPC",
                "Load Balancer"
            ],

            github: "https://github.com/Ajaypatel001/Book_Three_Tier_Application_Custom_Infra",
            demo: "#",
            icon: "fab fa-aws"
        },

        // ✅ Your ORIGINAL project untouched
        {
            title: "AWS Three-Tier Application",
            category: "Cloud & DevOps",
            description: "Scalable three-tier architecture deployed on AWS.",
            details: {
                why: "To design a highly available and fault-tolerant cloud infrastructure.",
                features: ["Auto Scaling Groups", "ELB Load Balancing", "Multi-AZ RDS Deployment"],
                techStack: "AWS EC2, S3, RDS, VPC, IAM"
            },
            tech: ["AWS", "EC2", "RDS", "Auto Scaling"],
            github: "#",
            demo: "#",
            icon: "fab fa-aws"
        },

        {
            title: "Automated Log Backup",
            category: "DevOps",
            description: "Automated EC2 log backups with monitoring and alerts.",
            details: {
                why: "To ensure data persistence and automate routine maintenance tasks.",
                features: ["Shell Scripting for Backups", "Cron Jobs", "S3 Lifecycle Policies"],
                techStack: "Bash, AWS CLI, CloudWatch, S3"
            },
            tech: ["AWS", "S3", "CloudWatch", "Linux"],
            github: "#",
            demo: "#",
            icon: "fas fa-server"
        },
        {
            title: "Path 4 You",
            category: "Career Guidance",
            description: "Comprehensive platform helping students find their right path.",
            details: {
                why: "To provide students with personalized career roadmaps.",
                features: ["Interactive Roadmap", "Resource Aggregation", "User Progress Tracking"],
                techStack: "MERN Stack, OpenAI API"
            },
            tech: ["MERN Stack", "React", "Node"],
            github: "",
            demo: "#",
            icon: "fas fa-laptop-code"
        },
        {
            title: "Govt. Schemes",
            category: "Info Portal",
            description: "Aggregating various government schemes for easy access.",
            details: {
                why: "To simplify access to government welfare programs.",
                features: ["Search & Filter", "Categorized Listings", "Multi-language Support"],
                techStack: "HTML, CSS, JavaScript, Fetch API"
            },
            tech: ["Frontend", "API"],
            github: "https://github.com/Ajaypatel001/Govt.scheems",
            demo: "#",
            icon: "fas fa-landmark"
        },
        {
            title: "Blog Application",
            category: "Full Stack",
            description: "Blogging platform with user auth and CRUD features.",
            details: {
                why: "To build a complete full-stack web application with modern technologies.",
                features: ["User Authentication (JWT)", "RESTful API", "Responsive UI"],
                techStack: "React, Node.js, Express, MongoDB, AWS"
            },
            tech: ["React", "Node.js", "AWS"],
            github: "https://github.com/Ajaypatel001/Blog_project",
            demo: "#",
            icon: "fas fa-blog"
        },
        {
            title: "Movie Tracker",
            category: "Web App",
            description: "Track and discover movies using external APIs.",
            details: {
                why: "To explore API integration and state management in React.",
                features: ["Movie Search", "Watchlist Management", "Rating System"],
                techStack: "React, Redux Toolkit, TMDB API"
            },
            tech: ["React", "Redux"],
            github: "https://github.com/Ajaypatel001/Movie_Tracker",
            demo: "#",
            icon: "fas fa-film"
        }
    ];

    const showMoreProjects = () => {
        setVisible((prevValue) => prevValue + 3);
    };

    const showLessProjects = () => {
        setVisible(3);
        setExpandedIndex(null);
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Projects <span className="count">({projectList.length})</span></h2>
                <div className="projects-list">
                    {projectList.slice(0, visible).map((project, index) => (
                        <div
                            key={index}
                            className={`project-item ${expandedIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="project-header">
                                <div className="project-img-placeholder">
                                    <i className={project.icon}></i>
                                </div>
                                <div className="project-info">
                                    <h3>{project.title} <span className="category-tag">{project.category}</span></h3>
                                    <p className="project-desc-short">{project.description}</p>
                                </div>
                                <div className="project-toggle">
                                    <i className={`fas fa-chevron-down ${expandedIndex === index ? 'rotate' : ''}`}></i>
                                </div>
                            </div>

                            <div className={`project-extended ${expandedIndex === index ? 'expanded' : ''}`}>
                                <div className="project-extended-inner">
                                    <div className="detail-row">
                                        <strong>Why I built this:</strong>
                                        <p>{project.details.why}</p>
                                    </div>
                                    <div className="detail-row">
                                        <strong>Key Features:</strong>
                                        <ul>
                                            {project.details.features.map((feat, i) => (
                                                <li key={i}>{feat}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="detail-row">
                                        <strong>Tech Stack:</strong>
                                        <p className="tech-highlight">{project.details.techStack}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="project-footer">
                                <div className="tech-stack-mini">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="mini-tag">{t}</span>
                                    ))}
                                </div>
                                <div className="project-actions">
                                    <a href={project.github} className="btn-project btn-github" onClick={(e) => e.stopPropagation()}>
                                        <i className="fab fa-github"></i> GitHub
                                    </a>
                                    <a href={project.demo} className="btn-project btn-demo" onClick={(e) => e.stopPropagation()}>
                                        <i className="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-actions" style={{ textAlign: 'center', marginTop: '2rem' }}>
                    {visible < projectList.length ? (
                        <button className="btn show-more-btn" onClick={showMoreProjects}>
                            Show More <i className="fas fa-chevron-down"></i>
                        </button>
                    ) : (
                        visible > 3 && (
                            <button className="btn show-more-btn" onClick={showLessProjects}>
                                Show Less <i className="fas fa-chevron-up"></i>
                            </button>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
