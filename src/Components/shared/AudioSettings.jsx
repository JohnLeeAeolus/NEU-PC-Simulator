import React, { useState } from "react";

export default function AudioSettings() {
    const [audio, setAudio] = useState({
        master: 50,
        music: 30,
        effects: 70,
        voice: 50,
    });

    const handleChange = (key, value) => {
        setAudio((prev) => ({ ...prev, [key]: Number(value) }));
    };

    return (
        <div className="audio-settings">
            <h3>Audio</h3>
            <div className="audio-slider-row">
                <span>Master Volume</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={audio.master}
                    onChange={(e) => handleChange("master", e.target.value)}
                    className="audio-slider"
                />
                <span>{audio.master}</span>
            </div>
            <div className="audio-slider-row">
                <span>Background Music</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={audio.music}
                    onChange={(e) => handleChange("music", e.target.value)}
                    className="audio-slider"
                />
                <span>{audio.music}</span>
            </div>
            <div className="audio-slider-row">
                <span>Sound Effects</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={audio.effects}
                    onChange={(e) => handleChange("effects", e.target.value)}
                    className="audio-slider"
                />
                <span>{audio.effects}</span>
            </div>
            <div className="audio-slider-row">
                <span>Voice Volume</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={audio.voice}
                    onChange={(e) => handleChange("voice", e.target.value)}
                    className="audio-slider"
                />
                <span>{audio.voice}</span>
            </div>
        </div>
    );
} 