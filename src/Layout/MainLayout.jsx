import React from 'react';
import { Link } from 'react-router-dom';

export default function MainLayout({ children }) {
  return (
    // Gradiente aplicado aqui no container principal
    <div className="flex h-screen w-full bg-gradient-to-br from-blue-100 via-purple-100 to-white">
      {/* Sidebar */}
      <aside className="flex flex-col w-80 h-full bg-gradient-to-b from-blue-900 to-blue-700 text-white px-6 py-8 shadow-lg">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-10 whitespace-nowrap overflow-hidden">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="FaceRec"
            className="w-10 h-10 flex-shrink-0"
          />
          <h1 className="text-2xl font-bold tracking-wide truncate">FaceRec</h1>
        </div>

        {/* Navegação */}
        <nav className="flex flex-col space-y-4 text-base">
          <Link to="/home" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-600 transition">
            🏠 Home
          </Link>
          <Link to="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-600 transition">
            📊 Dashboard
          </Link>
          <Link to="/alunos" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-600 transition">
            📋 Lista de Alunos
          </Link>
          <Link to="/configuracoes" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-600 transition">
            ⚙️ Configurações
          </Link>
        </nav>
      </aside>

      {/* Conteúdo principal (sem gradiente, já está no pai) */}
      <main className="flex-1 h-full overflow-y-auto p-10">
        {children}
      </main>
    </div>
  );
}
