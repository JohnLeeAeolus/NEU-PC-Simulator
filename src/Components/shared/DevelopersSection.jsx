import React from "react";

const devs = [
    {
        img: "/dev1.png", // Replace with your image paths
        quote: "Yes, the chicken is the final boss. Why wouldn't it be?",
    },
    {
        img: "/dev2.png",
        quote: "We're not behind schedule. The schedule is just... dynamic.",
    },
    {
        img: "/dev3.png",
        quote: "Let's pretend the player won't try that.",
    },
    {
        img: "/dev4.png",
        quote: "Our game engine is held together by hope and duct tape.",
    },
    {
        img: "/dev5.png",
        quote: "Player fell through the world again? That's the true ending.",
    },
    {
        img: "/dev6.png",
        quote: "I programmed it to be dumb, not this dumb.",
    },
];

export default function DevelopersSection() {
    return (
        <section className="developers">
            <h2>Game Developers</h2>
            <div className="devs-list">
                {devs.map((dev, idx) => (
                    <div className="dev-item" key={idx}>
                        <img src={dev.img} alt={`Dev ${idx + 1}`} className="dev-avatar" />
                        <p className="dev-quote">"{dev.quote}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
} 