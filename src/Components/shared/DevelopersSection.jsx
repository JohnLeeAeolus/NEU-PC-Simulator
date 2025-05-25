import React, { useState } from "react";
import devs from "../data/devs";
import "./DevelopersSection.css";

function FlipCard({ dev }) {
    const [flipped, setFlipped] = useState(false);
    return (
        <div
            className={"flip-card" + (flipped ? " flipped" : "")}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
            onTouchStart={() => setFlipped((f) => !f)}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front dev-item">
                    <img src={dev.avatar} alt={dev.name} className="dev-avatar" />
                    <div className="dev-name">{dev.name}</div>
                    <div className="dev-role">{dev.role}</div>
                </div>
                <div className="flip-card-back dev-item">
                    <div className="dev-quote">{dev.quote}</div>
                </div>
            </div>
        </div>
    );
}

export default function DevelopersSection() {
    return (
        <section className="developers fade-in-section">
            <h2>Meet the Developers</h2>
            <div className="devs-list">
                {devs.map((dev, idx) => (
                    <FlipCard dev={dev} key={idx} />
                ))}
            </div>
        </section>
    );
} 