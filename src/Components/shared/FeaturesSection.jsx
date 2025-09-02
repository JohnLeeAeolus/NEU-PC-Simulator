import React, { useState } from "react";
import "./FeaturesSection.css";

function TiltCard({ children }) {
    const [style, setStyle] = useState({});
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * -10;
        setStyle({ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`, transition: 'transform 0.1s' });
    };
    const handleMouseLeave = () => {
        setStyle({ transform: 'rotateX(0deg) rotateY(0deg) scale(1)', transition: 'transform 0.3s' });
    };
    return (
        <div className="tilt-card" style={style} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    );
}

export default function FeaturesSection() {
    return (
        <section className="features fade-in-section">
            <div className="features-container">
                <h2>Game Features</h2>
                <p className="features-subtitle">Experience the ultimate PC building simulation with our cutting-edge features</p>
                <div className="features-list">
                    <TiltCard>
                        <div className="feature-item">
                            <div className="feature-icon-wrapper">
                                <span className="feature-icon">🛠️</span>
                            </div>
                            <h3>PC Assembly</h3>
                            <p>
                                Assemble your own PC with detailed components and realistic building mechanics.
                                Choose from a vast selection of parts and create your dream machine.
                            </p>
                        </div>
                    </TiltCard>
                    <TiltCard>
                        <div className="feature-item">
                            <div className="feature-icon-wrapper">
                                <span className="feature-icon">🎮</span>
                            </div>
                            <h3>Custom Mods</h3>
                            <p>
                                Create and implement unique modifications to enhance gameplay,
                                introduce new components, or transform the game's appearance.
                            </p>
                        </div>
                    </TiltCard>
                    <TiltCard>
                        <div className="feature-item">
                            <div className="feature-icon-wrapper">
                                <span className="feature-icon">🖥️</span>
                            </div>
                            <h3>Intuitive Builder</h3>
                            <p>
                                Navigate our user-friendly interface to build your PC with ease.
                                No technical expertise required - just pure building enjoyment.
                            </p>
                        </div>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
} 