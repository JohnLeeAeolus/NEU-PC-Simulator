import React from "react";
import { useSettings } from "./SettingsContext"; // corrected path

const Navbar = () => {
  const { darkMode } = useSettings();

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
      <a href="/">Home</a>
      <a href="/settings">Settings</a>
      <a href="/help">Help</a>
      <a href="/dashboard">Dashboard</a>
    </nav>
  );
};

export default Navbar;
