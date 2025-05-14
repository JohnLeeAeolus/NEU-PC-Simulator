import React from "react";

export default function SandboxPanel() {
    return (
        <div className="sandbox-panel">
            <div className="sandbox-card create">Create New Build</div>
            {[...Array(5)].map((_, idx) => (
                <div className="sandbox-card" key={idx}></div>
            ))}
        </div>
    );
} 