import React from "react";

const tabs = [
    "Career Mode",
    "Sandbox",
    "Budget Mode",
    "Troubleshooting Mode"
];

export default function DashboardTabs({ activeTab, setActiveTab }) {
    return (
        <div className="dashboard-tabs">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={"dashboard-tab" + (activeTab === tab ? " active" : "")}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
} 