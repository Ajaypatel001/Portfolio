import React from 'react';
import './Skills.css';

const Skills = () => {
    const techStack = [
        { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
        { name: "React", icon: "fab fa-react", color: "#61dafb" },
        { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
        { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952b3" },
        { name: "AWS", icon: "fab fa-aws", color: "#ff9900" },
        { name: "Docker", icon: "fab fa-docker", color: "#2496ed" },
        { name: "Terraform", icon: "fas fa-layer-group", color: "#623ce4" },
        { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
        { name: "GitHub", icon: "fab fa-github", color: "#ffffff" },
        { name: "GitLab", icon: "fab fa-gitlab", color: "#fc6d26" },
        { name: "VS Code", icon: "fas fa-code", color: "#007acc" },
        { name: "MySQL", icon: "fas fa-database", color: "#00758f" },
        { name: "SQL", icon: "fas fa-database", color: "#00758f" },
        { name: "ChatGPT", icon: "fas fa-robot", color: "#10a37f" },
        { name: "DeepSeek", icon: "fas fa-brain", color: "#4e61e6" },
        { name: "Linux", icon: "fab fa-linux", color: "#fcc624" },
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Tech Stack</h2>
                <div className="tech-grid">
                    {techStack.map((tech, index) => (
                        <div key={index} className="tech-card">
                            <i className={`${tech.icon} tech-icon`} style={{ color: tech.color }}></i>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
