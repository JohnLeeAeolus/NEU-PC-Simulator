import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TutorialPage.css';

export default function SandboxPage() {
    const navigate = useNavigate();

    return (
        <div className="tutorial-page">
            <button className="floating-back-button" onClick={() => navigate('/dashboard')}>
                ← Back to Dashboard
            </button>
            <div className="tutorial-container">
                <iframe
                    src="/Sandbox/sandbox.html"
                    title="PC Building Sandbox"
                    className="game-iframe"
                    allow="fullscreen"
                />
            </div>
        </div>
    );
} 