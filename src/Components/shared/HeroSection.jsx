import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import selection from '../../assets/Selection.png';
import './HeroSection.css';

function ParticleBurst({ trigger }) {
    if (!trigger) return null;
    return (
        <div className="particle-burst">
            {[...Array(12)].map((_, i) => (
                <div key={i} className={`particle particle-${i}`} />
            ))}
        </div>
    );
}

export default function HeroSection() {
    const navigate = useNavigate();
    const [burst, setBurst] = useState(false);
    const handleBurst = () => {
        setBurst(true);
        setTimeout(() => setBurst(false), 700);
    };
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${selection})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="hero-overlay">
                <h1>Dive into 2D Gaming!</h1>
                <p className="hero-subtitle">
                    Dive into the Exciting World of Offline 2D Gaming!
                </p>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <button
                        className="btn btn-explore"
                        onClick={() => { handleBurst(); setTimeout(() => navigate("/dashboard"), 400); }}
                        onMouseDown={handleBurst}
                    >
                        Explore Now
                    </button>
                    <ParticleBurst trigger={burst} />
                </div>
            </div>
        </section>
    );
} 