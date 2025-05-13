import React, { useState } from "react";

const initialControls = [
    {
        control: "Sensitivity",
        action: "W",
        currentKey: "W",
        invert: "F",
        sensitivity: 0.8,
        enabled: false,
    },
    {
        control: "Mouse Cursor",
        action: "S",
        currentKey: "S",
        invert: "F",
        sensitivity: 0.8,
        enabled: false,
    },
];

export default function ControlsSettings() {
    const [activeScheme, setActiveScheme] = useState("Keyboard");
    const [controls, setControls] = useState(initialControls);
    const [saved, setSaved] = useState([false, false]);

    const handleCheckbox = (idx) => {
        setControls((prev) =>
            prev.map((row, i) => (i === idx ? { ...row, enabled: !row.enabled } : row))
        );
    };

    const handleSave = (idx) => {
        setSaved((prev) => prev.map((s, i) => (i === idx ? true : s)));
        setTimeout(() => {
            setSaved((prev) => prev.map((s, i) => (i === idx ? false : s)));
        }, 1000);
    };

    return (
        <div className="controls-settings">
            <h3>Controls</h3>
            <div className="controls-tabs">
                <button
                    className={"controls-tab" + (activeScheme === "Keyboard" ? " active" : "")}
                    onClick={() => setActiveScheme("Keyboard")}
                >
                    Keyboard
                </button>
                <button
                    className={"controls-tab" + (activeScheme === "Controller" ? " active" : "")}
                    onClick={() => setActiveScheme("Controller")}
                    disabled
                >
                    Controller
                </button>
            </div>
            <div className="controls-table-wrap">
                <table className="controls-table">
                    <thead>
                        <tr>
                            <th>Control</th>
                            <th>Action</th>
                            <th>Current Key</th>
                            <th>Invert</th>
                            <th>Sensitivity</th>
                            <th>Enabled</th>
                            <th>Save Changes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {controls.map((row, idx) => (
                            <tr key={idx}>
                                <td>{row.control}</td>
                                <td>{row.action}</td>
                                <td>{row.currentKey}</td>
                                <td>{row.invert}</td>
                                <td>{row.sensitivity}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={row.enabled}
                                        onChange={() => handleCheckbox(idx)}
                                    />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-primary btn-save"
                                        onClick={() => handleSave(idx)}
                                    >
                                        {saved[idx] ? "Saved!" : "Save"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
} 