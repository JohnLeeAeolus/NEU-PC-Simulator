import React, { useRef, useLayoutEffect, useState } from "react";

const tabs = [
    "Career Mode",
    "Sandbox",
    "Budget Mode",
    "Troubleshooting Mode"
];

export default function DashboardTabs({ activeTab, setActiveTab }) {
    const tabRefs = useRef([]);
    const [underline, setUnderline] = useState({ left: 0, width: 0 });

    useLayoutEffect(() => {
        const idx = tabs.indexOf(activeTab);
        const el = tabRefs.current[idx];
        if (el) {
            setUnderline({ left: el.offsetLeft, width: el.offsetWidth });
        }
    }, [activeTab]);

    return (
        <div className="dashboard-tabs" role="tablist">
            {tabs.map((tab, idx) => (
                <button
                    key={tab}
                    ref={el => tabRefs.current[idx] = el}
                    className={"dashboard-tab" + (activeTab === tab ? " active" : "")}
                    onClick={() => setActiveTab(tab)}
                    role="tab"
                    aria-selected={activeTab === tab}
                    aria-current={activeTab === tab ? "page" : undefined}
                >
                    {tab}
                </button>
            ))}
            <div
                className="dashboard-tab-underline"
                style={{ left: underline.left, width: underline.width }}
            />
        </div>
    );
} 