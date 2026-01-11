import React from 'react';
import './GlowingLogo.css';

const GlowingLogo = () => {
    return (
        <div className="logo-container">
            <div className="glowing-logo">
                <div className="glowing-ring"></div>
                {/* Optional outer blur layer can be handled by CSS pseudo-elements on ring */}

                <div className="logo-inner">
                    AP
                </div>
            </div>
        </div>
    );
};

export default GlowingLogo;
