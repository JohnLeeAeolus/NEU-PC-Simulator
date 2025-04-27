// src/Components/Settings/SettingsPage.jsx
"use client";
import React, { useState } from "react";
import "../Settings/styles/SettingsPage.css";

export default function SettingsPage({ darkMode, setDarkMode }) {
  const [activeTab, setActiveTab] = useState("Controls");
  const [audioVolume, setAudioVolume] = useState(50);
  const [dpi, setDpi] = useState(800);
  const [controls, setControls] = useState({
    moveForward: "W",
    moveBackward: "S",
    moveLeft: "A",
    moveRight: "D",
    jump: "Space",
    crouch: "Ctrl",
    fire: "Mouse1",
    aim: "Mouse2",
  });

  const handleControlChange = (action, value) => {
    setControls(prev => ({
      ...prev,
      [action]: value,
    }));
  };

  const handleSaveSettings = () => {
    console.log("Settings Saved:", {
      dpi,
      controls,
      audioVolume,
    });
    alert("Settings have been saved!");
  };

  return (
    <div className={`settings-page ${darkMode ? "dark" : "light"}`}>
      <div className="settings-header">
        <h1>Settings</h1>
        <button className="darkmode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <div className="main-tabs">
        <div
          className={`tab ${activeTab === "Controls" ? "active" : "inactive"}`}
          onClick={() => setActiveTab("Controls")}
        >
          Controls
        </div>
        <div
          className={`tab ${activeTab === "Audio" ? "active" : "inactive"}`}
          onClick={() => setActiveTab("Audio")}
        >
          Audio
        </div>
      </div>

      {activeTab === "Controls" && (
        <div className="controls-section">
          <h2>Mouse Settings</h2>
          <label>DPI: {dpi}</label>
          <input
            type="range"
            min="400"
            max="1600"
            value={dpi}
            onChange={(e) => setDpi(Number(e.target.value))}
          />

          <h2>Key Bindings</h2>
          <table className="controls-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Key</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(controls).map(([action, key]) => (
                <tr key={action}>
                  <td>{action}</td>
                  <td>
                    <input
                      type="text"
                      value={key}
                      onChange={(e) => handleControlChange(action, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "Audio" && (
        <div className="audio-settings">
          <h2>Audio Volume</h2>
          <input
            type="range"
            min="0"
            max="100"
            value={audioVolume}
            onChange={(e) => setAudioVolume(Number(e.target.value))}
          />
          <span>Volume: {audioVolume}%</span>
        </div>
      )}

      <button className="save-button" onClick={handleSaveSettings}>
        Save Settings
      </button>
    </div>
  );
}
