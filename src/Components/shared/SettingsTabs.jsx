import React, { useRef, useLayoutEffect, useState } from "react";

export default function SettingsTabs({ activeTab, setActiveTab }) {
    const tabs = ["Audio", "Controls"];
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
        <div className="settings-tabs">
            {tabs.map((tab, idx) => (
                <button
                    key={tab}
                    ref={el => tabRefs.current[idx] = el}
                    className={"settings-tab" + (activeTab === tab ? " active" : "")}
                    onClick={() => setActiveTab(tab)}
                    role="tab"
                    aria-selected={activeTab === tab}
                >
                    {tab}
                </button>
            ))}
            <div className="settings-tab-underline" style={{ left: underline.left, width: underline.width }} />
        </div>
    );
} 