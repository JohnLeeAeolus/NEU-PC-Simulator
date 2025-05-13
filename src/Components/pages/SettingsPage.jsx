import React, { useState } from "react";
import SettingsTabs from "../shared/SettingsTabs";
import AudioSettings from "../shared/AudioSettings";
import ControlsSettings from "../shared/ControlsSettings";
import "./SettingsPage.css";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("Audio");

    return (
        <div className="settings-root">
            <div className="settings-main">
                <div className="settings-title-row">
                    <span className="settings-back">&#8592;</span>
                    <h1 className="settings-title">Settings</h1>
                </div>
                <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab === "Audio" ? <AudioSettings /> : <ControlsSettings />}
            </div>
        </div>
    );
}
