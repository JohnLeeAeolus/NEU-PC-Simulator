import React from "react";

export default function FeaturesSection() {
    return (
        <section className="features">
            <h2>Game Features</h2>
            <div className="features-list">
                <div className="feature-item">
                    <span className="feature-icon">🛠️</span>
                    <p>
                        Assemble your own PC: NEU PC Simulator lets you gather the components and build a stunningly realistic PC. With detailed options for each part, the possible combinations will keep you entertained for hours on end!
                    </p>
                </div>
                <div className="feature-item">
                    <span className="feature-icon">🎮</span>
                    <p>
                        Mod unique: Players can create and implement modifications that enhance gameplay, introduce new components, or even change the entire look of the game. The potential for creativity is endless!
                    </p>
                </div>
                <div className="feature-item">
                    <span className="feature-icon">🖥️</span>
                    <p>
                        System Builder: NEU PC Simulator provides an intuitive interface for players to navigate and build their own PC, without the need for real-life technical expertise.
                    </p>
                </div>
            </div>
        </section>
    );
} 