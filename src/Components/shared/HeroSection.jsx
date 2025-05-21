import React from "react";
import { useNavigate } from "react-router-dom";
import selection from '../../assets/Selection.png';
import './HeroSection.css';

export default function HeroSection() {
    const navigate = useNavigate();
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
                <button
                    className="btn btn-explore"
                    onClick={() => navigate("/dashboard")}
                >
                    Explore Now
                </button>
            </div>
        </section>
    );
} 