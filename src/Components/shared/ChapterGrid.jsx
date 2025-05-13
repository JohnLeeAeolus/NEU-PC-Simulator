import React from "react";

const chapters = [
    { img: "/chapter1.png", title: "Chapter 1", locked: false },
    { img: "/chapter2.png", title: "Chapter 2", locked: false },
    { img: "/chapter3.png", title: "Chapter 3", locked: true },
    { img: "/chapter4.png", title: "Chapter 4", locked: false },
    { img: "/chapter5.png", title: "Chapter 5", locked: true },
    { img: "/chapter6.png", title: "Last Chapter", locked: true },
];

export default function ChapterGrid() {
    return (
        <div className="chapter-grid">
            {chapters.map((ch, idx) => (
                <div className="chapter-card" key={idx}>
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