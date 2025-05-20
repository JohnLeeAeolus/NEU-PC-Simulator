import React from "react";
import meImg from '../../assets/me.png';
import garfieldImg from '../../assets/garfield.png';
import dogImg from '../../assets/dog.png';
import dev4Img from '../../assets/dev4.jpg';
import dev5Img from '../../assets/dev5.jpg';
import dev6Img from '../../assets/dev6.jpg';

const devs = [
    {
        img: meImg, // Use imported image
        quote: "Yes, the chicken is the final boss. Why wouldn't it be?",
    },
    {
        img: garfieldImg,
        quote: "We're not behind schedule. The schedule is just... dynamic.",
    },
    {
        img: dogImg,
        quote: "Let's pretend the player won't try that.",
    },
    {
        img: dev4Img,
        quote: "Our game engine is held together by hope and duct tape.",
    },
    {
        img: dev5Img,
        quote: "Player fell through the world again? That's the true ending.",
    },
    {
        img: dev6Img,
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