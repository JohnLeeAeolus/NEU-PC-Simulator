import React, { useRef } from "react";
import chapter1 from '../../assets/chapter 1.png';
import chapter2 from '../../assets/chapter 2.png';
import chapter3 from '../../assets/chapter 3.png';
import chapter4 from '../../assets/chapter 4.png';
import chapter5 from '../../assets/chapter 5.png';
import chapter6 from '../../assets/chapter 6.png';
import tutorImg from '../../assets/tutor.png';

const chapters = [
    { img: tutorImg, title: "Tutorial Phase", locked: false, isTutorial: true, description: "Start here to learn the basics of the game." },
    { img: chapter1, title: "Chapter 1", locked: true, description: "The Final Decision: Make your first big choice." },
    { img: chapter2, title: "Chapter 2", locked: true, description: "The Ultimate Heist: Plan and execute a daring mission." },
    { img: chapter3, title: "Chapter 3", locked: true, description: "AI vs. Builder: Face off against rogue technology." },
    { img: chapter4, title: "Chapter 4", locked: true, description: "Enter the Underground: Explore the city's secrets." },
    { img: chapter5, title: "Chapter 5", locked: true, description: "The Big Break: Seize your opportunity." },
    { img: chapter6, title: "Last Chapter", locked: true, description: "The First Fix: Solve the final puzzle." },
];

export default function ChapterGrid({ selectedIdx, onSelect }) {
    const cardRefs = useRef([]);
    return (
        <div className="chapter-grid" style={{ position: 'relative' }}>
            {chapters.map((ch, idx) => (
                <div
                    className={"chapter-card" + (ch.isTutorial ? " tutorial-card" : "") + (selectedIdx === idx ? " selected" : "")}
                    key={idx}
                    ref={el => cardRefs.current[idx] = el}
                    onClick={() => onSelect(idx)}
                    style={ch.isTutorial ? { cursor: 'pointer', boxShadow: '0 4px 16px #b4c6fc' } : { cursor: 'pointer' }}
                >
                    <div className="chapter-img-wrap">
                        <img src={ch.img} alt={ch.title} className="chapter-img" />
                        {ch.locked && (
                            <div className="chapter-lock">
                                <span role="img" aria-label="locked" className="lock-icon">🔒</span>
                            </div>
                        )}
                    </div>
                    <div className="chapter-title">{ch.title}</div>
                </div>
            ))}
        </div>
    );
}

export { chapters }; 