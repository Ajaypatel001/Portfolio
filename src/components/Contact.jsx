import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>

                <div className="contact-container">
                    <form className="contact-form" action="mailto:Ajaypatel830544@gmail.com" method="post" encType="text/plain">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Your message ..." required></textarea>
                        </div>

                        <button type="submit" className="btn submit-btn">Send <i className="fas fa-paper-plane"></i></button>
                    </form>
                </div>

                <div className="social-footer">
                    <a href="https://github.com/Ajaypatel001" target="_blank" rel="noreferrer" className="social-icon">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ajay-patel-622298318/" target="_blank" rel="noreferrer" className="social-icon">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:Ajaypatel830544@gmail.com" className="social-icon">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>

                <footer className="footer-text">
                    <p>© {new Date().getFullYear()} Ajay Patel. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
