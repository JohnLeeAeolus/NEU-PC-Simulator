import React from "react";

export default function SettingsTabs({ activeTab, setActiveTab }) {
    return (
        <div className="settings-tabs">
            <button
                className={"settings-tab" + (activeTab === "Audio" ? " active" : "")}
                onClick={() => setActiveTab("Audio")}
            >
                Audio
            </button>
            <button
                className={"settings-tab" + (activeTab === "Controls" ? " active" : "")}
                onClick={() => setActiveTab("Controls")}
            >
                Controls
            </button>
        </div>
    );
} 