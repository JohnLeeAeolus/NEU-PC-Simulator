import React from "react";

const challenges = Array.from({ length: 12 }, (_, i) => ({
    label: `Challenge ${i + 1}`,
    locked: true,
}));

export default function TroubleshootingPanel() {
    return (
        <div className="troubleshooting-panel">
            <div className="troubleshooting-pagination">
                {[0, 1, 2, 3].map((dot) => (
                    <span key={dot} className={"troubleshooting-dot" + (dot === 0 ? " active" : "")}></span>
                ))}
            </div>
            <div className="troubleshooting-grid">
                {challenges.map((ch, idx) => (
                    <div className="troubleshooting-card" key={idx}>
                        <div className="troubleshooting-card-img-wrap">
                            <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="6" width="44" height="28" rx="4" fill="#e5e7fa" />
                                <path d="M2 6L24 24L46 6" stroke="#b4b8d7" strokeWidth="2" />
                            </svg>
                            <span className="troubleshooting-lock">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="9" width="12" height="7" rx="2" fill="#fff" stroke="#e57373" strokeWidth="1.5" />
                                    <path d="M10 9V7.5C10 5.57 11.57 4 13.5 4C15.43 4 17 5.57 17 7.5V9" stroke="#e57373" strokeWidth="1.5" />
                                </svg>
                            </span>
                        </div>
                        <div className="troubleshooting-card-label">{ch.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
} 