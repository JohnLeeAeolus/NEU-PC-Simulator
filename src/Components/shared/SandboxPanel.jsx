import React from "react";
import { useNavigate } from 'react-router-dom';

export default function SandboxPanel() {
    const navigate = useNavigate();
    return (
        <div className="sandbox-panel">
            <div className="sandbox-card create" onClick={() => navigate('/sandbox')} style={{ cursor: 'pointer' }}>Create New Build</div>
            {[...Array(5)].map((_, idx) => (
                <div className="sandbox-card" key={idx}></div>
            ))}
        </div>
    );
} 