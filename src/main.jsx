// ✅ All imports go first
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Pages
import LandingPage from './Components/pages/LandingPage.jsx';
import SettingsPage from './Components/pages/SettingsPage.jsx';
import HelpPage from './Components/pages/HelpPage.jsx';
import DashboardPage from './Components/pages/DashboardPage.jsx';
import Header from './Components/shared/Header.jsx';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
