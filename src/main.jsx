// ✅ All imports go first
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Pages
import LandingPage from './Components/pages/LandingPage.jsx';
import SettingsPage from './Components/pages/SettingsPage.jsx';
import HelpPage from './Components/pages/HelpPage.jsx';
import DashboardPage from './Components/pages/DashboardPage.jsx';
import TutorialPage from './Components/pages/TutorialPage.jsx';
import SandboxPage from './Components/pages/SandboxPage.jsx';
import Header from './Components/shared/Header.jsx';

function AppRoutes() {
  const location = useLocation();
  const hideHeader = location.pathname === '/tutorial' || location.pathname === '/sandbox';
  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route path="/sandbox" element={<SandboxPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
