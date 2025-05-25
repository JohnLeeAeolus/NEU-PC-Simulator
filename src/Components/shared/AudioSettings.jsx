import React, { useState } from "react";

export default function AudioSettings() {
    const [audio, setAudio] = useState({
        master: 50,
        music: 30,
        effects: 70,
        voice: 50,
    });
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [lastChanged, setLastChanged] = useState(null);

    const handleChange = (key, value) => {
        setAudio((prev) => ({ ...prev, [key]: Number(value) }));
        setLastChanged(key);
        setTimeout(() => setLastChanged(null), 800);
    };

    const handleSave = () => {
        setSaving(true);
        setTimeout(() => {
            setSaving(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 1200);
        }, 700);
    };

    return (
        <div className="audio-settings fade-in-section">
            <h3>Audio</h3>
            <div className="audio-slider-row">
                <span>Master Volume</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={audio.master}
                    onChange={e => handleChange("master", e.target.value)}
                    className="audio-slider"
                />
                <span className={lastChanged === "master" ? "audio-value-changed" : ""}>{audio.master}</span>
            </div>
            <div className="audio-slider-row">
                <span>Background Music</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={audio.music}
                    onChange={e => handleChange("music", e.target.value)}
                    className="audio-slider"
                />
                <span className={lastChanged === "music" ? "audio-value-changed" : ""}>{audio.music}</span>
            </div>
            <div className="audio-slider-row">
                <span>Sound Effects</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={audio.effects}
                    onChange={e => handleChange("effects", e.target.value)}
                    className="audio-slider"
                />
                <span className={lastChanged === "effects" ? "audio-value-changed" : ""}>{audio.effects}</span>
            </div>
            <div className="audio-slider-row">
                <span>Voice</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={audio.voice}
                    onChange={e => handleChange("voice", e.target.value)}
                    className="audio-slider"
                />
                <span className={lastChanged === "voice" ? "audio-value-changed" : ""}>{audio.voice}</span>
            </div>
            <button className={`btn-save${saving ? " saving" : ""}${saved ? " saved" : ""}`} onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : "Save"}
            </button>
        </div>
    );
} 