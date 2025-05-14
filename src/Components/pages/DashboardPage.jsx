import React, { useState } from "react";
import DashboardTabs from "../shared/DashboardTabs";
import ChapterGrid from "../shared/ChapterGrid";
import SandboxPanel from "../shared/SandboxPanel";
import TroubleshootingPanel from "../shared/TroubleshootingPanel";
import BudgetPanel from "../shared/BudgetPanel";
import "./DashboardPage.css";

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState("Career Mode");

    return (
        <div className="dashboard-root">
            <div className="dashboard-tabs-wrap">
                <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="dashboard-main">
                <div className="dashboard-left">
                    {activeTab === "Budget Mode" ? (
                        <div className="budget-mail-sidebar">
                            <div className="budget-mail-title">Mail</div>
                            <ul className="budget-mail-list">
                                <li><span className="mail-icon">📥</span> Inbox <span className="mail-badge">99+</span></li>
                                <li><span className="mail-icon">⭐</span> Starred</li>
                                <li><span className="mail-icon">📤</span> Sent <span className="mail-badge">N</span></li>
                                <li><span className="mail-icon">📝</span> Draft</li>
                            </ul>
                        </div>
                    ) : (activeTab === "Sandbox" || activeTab === "Troubleshooting Mode") ? (
                        <>
                            <div className="dashboard-desc">Description</div>
                            <div className="dashboard-sandbox-img-placeholder">
                                <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="40" cy="25" r="8" fill="#d1d5db" />
                                    <rect x="15" y="40" width="50" height="12" rx="3" fill="#d1d5db" />
                                </svg>
                            </div>
                        </>
                    ) : (
                        <>
                            <img src="/dashboard-main.png" alt="Main" className="dashboard-main-img" />
                            <div className="dashboard-desc">Description</div>
                        </>
                    )}
                </div>
                <div className="dashboard-right">
                    {activeTab === "Budget Mode" ? <BudgetPanel /> :
                        activeTab === "Sandbox" ? <SandboxPanel /> :
                            activeTab === "Troubleshooting Mode" ? <TroubleshootingPanel /> :
                                <ChapterGrid activeTab={activeTab} />}
                </div>
            </div>
        </div>
    );
} 