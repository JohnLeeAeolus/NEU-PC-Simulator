// ✅ All imports go first
import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Settings from './Components/Settings/SettingsPage.jsx'; // Correct

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage darkMode={darkMode} />} />
          <Route path="/Settings" element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
