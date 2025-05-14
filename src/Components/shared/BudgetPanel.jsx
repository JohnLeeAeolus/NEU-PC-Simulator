import React from "react";

const mails = [
    "John Doe - Help me Build my Pc",
    "Mark Jersey - Help me Build my Pc",
    "Mary Ann - Help me Build my Pc",
    "Sandy Chicks - Help me Build my Pc",
    ...Array(6).fill("")
];

export default function BudgetPanel() {
    return (
        <div className="budget-panel">
            <div className="budget-panel-topbar">
                <input className="budget-search" placeholder="Search" />
                <div className="budget-panel-actions">
                    <button className="budget-action-btn" title="Play">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="11" fill="#7f9cf5" /><polygon points="8,6 17,11 8,16" fill="#fff" /></svg>
                    </button>
                    <button className="budget-action-btn" title="Info">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="11" fill="#7f9cf5" /><text x="11" y="16" textAnchor="middle" fontSize="12" fill="#fff">i</text></svg>
                    </button>
                </div>
            </div>
            <div className="budget-mail-list-panel">
                {mails.map((mail, idx) => (
                    <div className="budget-mail-card" key={idx}>
                        {mail && <span className="budget-mail-text">{mail}</span>}
                    </div>
                ))}
                <button className="budget-compose-btn" title="Compose">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="6" fill="#7f9cf5" /><path d="M10 22l12-12M18 10h4v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
            </div>
        </div>
    );
} 