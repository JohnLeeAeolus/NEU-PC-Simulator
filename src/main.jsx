// ✅ All imports go first
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Settings from './Components/Settings/GameSettings.jsx';

// ✅ Then your render logic
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
