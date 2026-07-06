import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Cloud Deployment",
            icon: "fas fa-cloud-upload-alt",
            description:
                "Deploying scalable and secure applications on cloud platforms with high availability and fault tolerance.",
            color: "#2596be"
        },
        {
            title: "AWS Cloud",
            icon: "fab fa-aws",
            description:
                "Building and managing AWS infrastructure using EC2, S3, IAM, VPC, RDS, Route53, Load Balancer and Auto Scaling.",
            color: "#FF9900"
        },
        {
            title: "Microsoft Azure",
            icon: "fab fa-microsoft",
            description:
                "Deploying and managing applications on Microsoft Azure using Virtual Machines, Storage, Networking and Azure services.",
            color: "#0078D4"
        },
        {
            title: "Google Cloud (GCP)",
            icon: "fas fa-cloud",
            description:
                "Working with Google Cloud Platform services including Compute Engine, Cloud Storage, VPC and IAM.",
            color: "#4285F4"
        },
        {
            title: "Docker & Kubernetes",
            icon: "fas fa-dharmachakra",
            description:
                "Containerizing applications with Docker and orchestrating scalable deployments using Kubernetes.",
            color: "#326CE5"
        },
        {
            title: "Terraform & GitOps",
            icon: "fas fa-server",
            description:
                "Provisioning cloud infrastructure using Terraform and automating deployments with GitOps workflows.",
            color: "#7B42BC"
        },
        {
            title: "CI/CD Pipeline",
            icon: "fas fa-infinity",
            description:
                "Building automated CI/CD pipelines using Git, GitHub, Jenkins and deployment automation tools.",
            color: "#E24329"
        },
        {
            title: "Web Development",
            icon: "fas fa-code",
            description:
                "Developing responsive and modern web applications using HTML, CSS, JavaScript, React.js, Node.js, Express.js and MySQL.",
            color: "#61DAFB"
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-title">What I Can Do</h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card"
                            style={{ "--accent-color": service.color }}
                        >
                            <div className="service-icon-box">
                                <i className={service.icon}></i>
                            </div>

                            <h3 className="service-title">
                                {service.title}
                            </h3>

                            <p className="service-desc">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
