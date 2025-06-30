import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login/index';
import Cadastro from './pages/Cadastro/index';
import Home from './pages/Home/index';
import Dashboard from './pages/Dashboard/Dashboard';
import MainLayout from './layout/MainLayout';

function AppContent() {
  const location = useLocation();
  const isPublicPage = location.pathname === '/' || location.pathname === '/cadastro';

  return (
    <div className="flex min-h-screen">
      {!isPublicPage && <MainLayout />}
      <div className="flex-1 bg-gray-50">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
