import React from 'react';
import './Education.css';

const Education = () => {
    const [expandedIndex, setExpandedIndex] = React.useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const educationList = [
        {
            institution: "Eklavya University",
            degree: "B.Tech in Computer Science Engineering",
            year: "Currently Pursuing",
            location: "Damoh, Madhya Pradesh",
            icon: "fas fa-graduation-cap"
        },
        {
            institution: "Polytechnic Diploma",
            degree: "Diploma in Computer Science Engineering",
            year: "Completed (CGPA 7.5)",
            location: "",
            icon: "fas fa-certificate"
        },
        {
            institution: "Higher Secondary",
            degree: "12th Grade - MP Board (NCERT)",
            year: "Completed (70%)",
            location: "",
            icon: "fas fa-school"
        }
    ];

    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-list">
                    {educationList.map((edu, index) => (
                        <div
                            key={index}
                            className={`education-item ${expandedIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="edu-header">
                                <div className="edu-icon-compact">
                                    <i className={edu.icon}></i>
                                </div>
                                <div className="edu-summary">
                                    <h3 className="edu-institution-name">{edu.institution}</h3>
                                    <span className="edu-year-badge">{edu.year}</span>
                                </div>
                                <div className="edu-toggle">
                                    <i className={`fas fa-chevron-down ${expandedIndex === index ? 'rotate' : ''}`}></i>
                                </div>
                            </div>

                            <div className={`edu-content ${expandedIndex === index ? 'expanded' : ''}`}>
                                <div className="edu-content-inner">
                                    <h4 className="edu-degree">{edu.degree}</h4>
                                    {edu.location && <p className="edu-location"><i className="fas fa-map-marker-alt"></i> {edu.location}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
