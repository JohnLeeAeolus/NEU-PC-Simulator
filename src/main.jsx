// ✅ All imports go first
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Pages
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import SettingsPage from './Components/Settings/SettingsPage.jsx';

// Context
import { SettingsProvider } from './Components/Settings/SettingsContext.jsx'; // 🆕 context here!

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SettingsProvider> {/* 👈 wrapped here */}
      <App />
    </SettingsProvider>
  </StrictMode>
);
