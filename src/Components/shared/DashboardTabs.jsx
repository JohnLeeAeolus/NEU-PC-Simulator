import React from "react";

const tabs = [
    "Career Mode",
    "Sandbox",
    "Budget Mode",
    "Troubleshooting Mode"
];

export default function DashboardTabs({ activeTab, setActiveTab }) {
    console.log("DashboardTabs rendered");
    return (
        <div className="dashboard-tabs" role="tablist">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={"dashboard-tab" + (activeTab === tab ? " active" : "")}
                    onClick={() => setActiveTab(tab)}
                    role="tab"
                    aria-selected={activeTab === tab}
                    aria-current={activeTab === tab ? "page" : undefined}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
} 