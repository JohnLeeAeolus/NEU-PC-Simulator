import React, { useState } from "react";
import DashboardTabs from "../shared/DashboardTabs";
import ChapterGrid, { chapters } from "../shared/ChapterGrid";
import SandboxPanel from "../shared/SandboxPanel";
import TroubleshootingPanel from "../shared/TroubleshootingPanel";
import BudgetPanel from "../shared/BudgetPanel";
import "./DashboardPage.css";

const mailFolders = [
    {
        key: 'inbox', label: 'Inbox', icon: (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="3" fill="#4f5be8" /><path d="M2 5l10 7 10-7" stroke="#fff" strokeWidth="2" /></svg>
        ), badge: 99
    },
    {
        key: 'starred', label: 'Starred', icon: (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#fbbf24" /></svg>
        )
    },
    {
        key: 'sent', label: 'Sent', icon: (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2z" fill="#4f5be8" /></svg>
        ), badge: 1
    },
    {
        key: 'draft', label: 'Draft', icon: (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="#a0aec0" /><path d="M3 7h18" stroke="#fff" strokeWidth="2" /></svg>
        )
    },
];

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState("Career Mode");
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [selectedFolder, setSelectedFolder] = useState('inbox');

    // Map tab label to mode value
    const getMode = (tab) => {
        switch (tab) {
            case "Career Mode": return "career";
            case "Sandbox": return "sandbox";
            case "Budget Mode": return "budget";
            case "Troubleshooting Mode": return "troubleshooting";
            default: return "career";
        }
    };

    const selectedChapter = chapters[selectedIdx] || chapters[0];

    return (
        <div className="dashboard-root">
            <div className="dashboard-tabs-wrap">
                <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="dashboard-main">
                <div className="dashboard-left">
                    {activeTab === "Career Mode" && (
                        <div className="chapter-side-panel" style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px #e0e7ef', padding: '2rem', minWidth: 280 }}>
                            <img src={selectedChapter.img} alt={selectedChapter.title} style={{ width: '100%', borderRadius: 8, marginBottom: 16 }} />
                            <div className="chapter-preview-title" style={{ fontWeight: 700, fontSize: 22, marginBottom: 8, textAlign: 'center' }}>{selectedChapter.title}</div>
                            <div className="chapter-preview-desc" style={{ color: '#555', fontSize: 18, textAlign: 'center' }}>{selectedChapter.description}</div>
                        </div>
                    )}
                    {activeTab === "Budget Mode" && (
                        <div className="budget-mail-sidebar modern">
                            <button className="mail-compose-btn">+ Compose</button>
                            <div className="budget-mail-title">Mail</div>
                            <ul className="budget-mail-list">
                                {mailFolders.map(folder => (
                                    <li
                                        key={folder.key}
                                        className={"mail-folder" + (selectedFolder === folder.key ? " selected" : "")}
                                        onClick={() => setSelectedFolder(folder.key)}
                                    >
                                        <span className="mail-icon">{folder.icon}</span>
                                        <span className="mail-label">{folder.label}</span>
                                        {folder.badge && <span className="mail-badge">{folder.badge > 99 ? '99+' : folder.badge}</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="dashboard-right">
                    {activeTab === "Budget Mode" ? <BudgetPanel /> :
                        activeTab === "Sandbox" ? <SandboxPanel /> :
                            activeTab === "Troubleshooting Mode" ? <TroubleshootingPanel /> :
                                <ChapterGrid selectedIdx={selectedIdx} onSelect={setSelectedIdx} />}
                </div>
            </div>
        </div>
    );
} 