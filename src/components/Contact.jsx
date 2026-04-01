import React from 'react';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        try {
            // Append captcha bypass for AJAX calls
            formData.append("_captcha", "false");
            
            const response = await fetch("https://formsubmit.co/ajax/Ajaypatel830544@gmail.com", {
                method: "POST",
                headers: { 
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset(); // Clear form fields
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
        
        // Hide message after 5 seconds
        setTimeout(() => {
            setStatus('');
        }, 5000);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>

                <div className="contact-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
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

                        <button type="submit" className="btn submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send'} 
                            {status !== 'sending' && <i className="fas fa-paper-plane"></i>}
                        </button>
                        
                        {status === 'success' && <div className="status-msg success">Message Sent Successfully!</div>}
                        {status === 'error' && <div className="status-msg error">Oops! There was a problem. Try again.</div>}
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
