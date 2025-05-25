import React from "react";

export default function SettingsTabs({ activeTab, setActiveTab }) {
    const tabs = ["Audio", "Controls"];
    return (
        <div className="settings-tabs">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={"settings-tab" + (activeTab === tab ? " active" : "")}
                    onClick={() => setActiveTab(tab)}
                    role="tab"
                    aria-selected={activeTab === tab}
                >
                    {tab}
                </button>
            ))}
            <div className="settings-tab-underline" style={{ left: `${tabs.indexOf(activeTab) * 120}px` }} />
        </div>
    );
} 