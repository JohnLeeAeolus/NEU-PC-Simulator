import React from "react";
import { useSettings } from "./SettingsContext";
import Navbar from "./Navbar"; // <-- import the Navbar here
import "./styles/SettingsPage.css";

const SettingsPage = () => {
  const { darkMode, toggleDarkMode, audioSettings, updateAudioSettings } = useSettings();

  return (
    <div className="settings-container">
      <Navbar /> {/* Add the Navbar here */}
      <h1>Settings</h1>

      <div className="tabs">
        <button className="tab active">Audio</button>
        <button className="tab">Controls</button>
      </div>

      <div className="section">
        <h2>Audio</h2>
        <div className="slider-group">
          {Object.keys(audioSettings).map((type) => (
            <div key={type} className="slider-item">
              <label>{type.charAt(0).toUpperCase() + type.slice(1)} Volume</label>
              <input
                type="range"
                min="0"
                max="100"
                value={audioSettings[type]}
                onChange={(e) => updateAudioSettings(type, e.target.value)}
              />
              <span>{audioSettings[type]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Theme</h2>
        <button onClick={toggleDarkMode} className="toggle-dark">
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <div className="section">
        <h2>Controls (Coming Soon)</h2>
        <p>Customize your keybindings and control sensitivity here.</p>
      </div>
    </div>
  );
};

export default SettingsPage;
