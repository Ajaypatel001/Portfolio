import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [visible, setVisible] = useState(4);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const projectList = [

        // 🔥 NEW DevOps Project (TOP)
        {
            title: "Google Store DevOps Project (EKS + Kubernetes)",
            category: "Cloud & DevOps | Kubernetes",
            description: "End-to-end DevOps project deploying a full-stack application using EKS, Kubernetes, CI/CD, and monitoring tools.",

            details: {
                why: "To build a production-ready DevOps pipeline with Kubernetes, CI/CD, logging, and monitoring on AWS.",

                features: [
                    "EKS Cluster setup using Terraform",
                    "Kubernetes deployment (frontend & backend)",
                    "CI/CD using GitHub Actions",
                    "ArgoCD for GitOps deployment",
                    "RDS (MariaDB) integration",
                    "Ingress-Nginx for routing",
                    "EFK Stack for logging",
                    "Prometheus & Grafana monitoring",
                    "Secure VPC & IAM setup",
                    "Load Balancer access"
                ],

                techStack: "AWS (EKS, RDS, VPC, IAM), Kubernetes, Docker, Terraform, ArgoCD, GitHub Actions, Prometheus, Grafana, EFK Stack, Linux"
            },

            tech: [
                "AWS",
                "Kubernetes",
                "Docker",
                "Terraform",
                "ArgoCD",
                "CI/CD",
                "Prometheus",
                "Grafana"
            ],

            github: "https://github.com/Ajaypatel001/google-store-DevOps-project",
            demo: "#",
            icon: "fab fa-aws"
        },

        // ✅ Terraform Project
        {
            title: "Three-Tier Books Application (Terraform Deployment)",
            category: "Cloud & DevOps | Full Stack",
            description: "Automated deployment of a full-stack three-tier Books application on AWS using Terraform.",

            details: {
                why: "To automate cloud infrastructure provisioning using Infrastructure as Code.",

                features: [
                    "Terraform IaC",
                    "Three-tier architecture",
                    "Auto Scaling",
                    "Load Balancer",
                    "Secure VPC",
                    "RDS Database",
                    "Lambda integration",
                    "S3 storage"
                ],

                techStack: "Terraform, AWS, Linux, Git"
            },

            tech: ["Terraform", "AWS", "EC2", "S3", "RDS", "VPC"],
            github: "https://github.com/Ajaypatel001/Book_Three_Tier_Application_Custom_Infra",
            demo: "#",
            icon: "fab fa-aws"
        },

        // ✅ AWS Project
        {
            title: "AWS Three-Tier Application",
            category: "Cloud & DevOps",
            description: "Scalable three-tier architecture deployed on AWS.",

            details: {
                why: "To design a highly available system.",
                features: ["Auto Scaling", "Load Balancing", "Multi-AZ RDS"],
                techStack: "AWS EC2, S3, RDS, VPC"
            },

            tech: ["AWS", "EC2", "RDS"],
            github: "#",
            demo: "#",
            icon: "fab fa-aws"
        },

        // ✅ DevOps Script
        {
            title: "Automated Log Backup",
            category: "DevOps",
            description: "Automated EC2 log backups with monitoring.",

            details: {
                why: "To automate backups and ensure data safety.",
                features: ["Shell Script", "Cron Jobs", "S3 Backup"],
                techStack: "Bash, AWS CLI, CloudWatch"
            },

            tech: ["AWS", "Linux", "S3"],
            github: "#",
            demo: "#",
            icon: "fas fa-server"
        },

        // ✅ Other Projects
        {
            title: "Path 4 You",
            category: "Career Guidance",
            description: "Platform helping students find career paths.",

            details: {
                why: "To guide students.",
                features: ["Roadmap", "Tracking"],
                techStack: "MERN Stack"
            },

            tech: ["React", "Node"],
            github: "",
            demo: "#",
            icon: "fas fa-laptop-code"
        },

        {
            title: "Govt. Schemes",
            category: "Info Portal",
            description: "Government schemes platform.",

            details: {
                why: "To simplify access.",
                features: ["Search", "Filter"],
                techStack: "HTML, CSS, JS"
            },

            tech: ["Frontend"],
            github: "https://github.com/Ajaypatel001/Govt.scheems",
            demo: "#",
            icon: "fas fa-landmark"
        },

        {
            title: "Blog Application",
            category: "Full Stack",
            description: "Blog platform with auth.",

            details: {
                why: "To build full stack app.",
                features: ["JWT Auth", "CRUD"],
                techStack: "React, Node, MongoDB"
            },

            tech: ["React", "Node"],
            github: "https://github.com/Ajaypatel001/Blog_project",
            demo: "#",
            icon: "fas fa-blog"
        },

        {
            title: "Movie Tracker",
            category: "Web App",
            description: "Movie tracking app.",

            details: {
                why: "To learn API integration.",
                features: ["Search", "Watchlist"],
                techStack: "React"
            },

            tech: ["React"],
            github: "https://github.com/Ajaypatel001/Movie_Tracker",
            demo: "#",
            icon: "fas fa-film"
        }
    ];

    const showMoreProjects = () => setVisible(prev => prev + 3);
    const showLessProjects = () => {
        setVisible(4);
        setExpandedIndex(null);
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">
                    Projects <span className="count">({projectList.length})</span>
                </h2>

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
                                    <h3>
                                        {project.title}
                                        <span className="category-tag">{project.category}</span>
                                    </h3>
                                    <p>{project.description}</p>
                                </div>

                                <i className={`fas fa-chevron-down ${expandedIndex === index ? 'rotate' : ''}`}></i>
                            </div>

                            {expandedIndex === index && (
                                <div className="project-extended">
                                    <p><strong>Why:</strong> {project.details.why}</p>

                                    <ul>
                                        {project.details.features.map((f, i) => (
                                            <li key={i}>{f}</li>
                                        ))}
                                    </ul>

                                    <p><strong>Tech:</strong> {project.details.techStack}</p>
                                </div>
                            )}

                            <div className="project-footer">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="mini-tag">{t}</span>
                                ))}

                                <div>
                                    <a href={project.github}>GitHub</a>
                                    <a href={project.demo}>Demo</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    {visible < projectList.length ? (
                        <button onClick={showMoreProjects}>Show More</button>
                    ) : (
                        <button onClick={showLessProjects}>Show Less</button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
