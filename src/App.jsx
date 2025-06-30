import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Login from './pages/Login/index';
import Cadastro from './pages/Cadastro/index';
import Home from './pages/Home/index';
import Dashboard from './pages/Dashboard/Dashboard';
import MainLayout from './layout/MainLayout';
import Configuracoes from './pages/Configuracoes/index';

function AppContent() {
  const location = useLocation();
  const isPublicPage = ["/", "/login", "/cadastro"].includes(location.pathname);

  return (
    <div className="flex min-h-screen w-full">
      {!isPublicPage && <MainLayout />}
      <div className={`flex-1 ${isPublicPage ? 'bg-gradient-to-b from-blue-100 to-purple-100' : 'bg-gray-50'}`}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
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
