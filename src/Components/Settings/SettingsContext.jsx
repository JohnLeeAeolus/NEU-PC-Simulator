import React, { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [audioSettings, setAudioSettings] = useState({
    master: 50,
    background: 30,
    effects: 70,
    voice: 50,
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode");
  };

  const updateAudioSettings = (type, value) => {
    setAudioSettings((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <SettingsContext.Provider
      value={{ darkMode, toggleDarkMode, audioSettings, updateAudioSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
