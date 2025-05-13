import React, { useState } from "react";
import DashboardTabs from "../shared/DashboardTabs";
import ChapterGrid from "../shared/ChapterGrid";
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
                    <img src="/dashboard-main.png" alt="Main" className="dashboard-main-img" />
                    <div className="dashboard-desc">Description</div>
                </div>
                <div className="dashboard-right">
                    <ChapterGrid activeTab={activeTab} />
                </div>
            </div>
        </div>
    );
} 