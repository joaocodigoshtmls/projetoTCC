import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">📷 Dashboard - Câmera ao Vivo</h2>

      <p className="text-lg text-center text-gray-600 mb-10">
        Aqui você verá a transmissão da câmera em tempo real.
      </p>

      <div className="flex justify-center">
        <div
          id="camera-container"
          className="w-full max-w-4xl h-[500px] bg-black rounded-lg shadow-lg flex items-center justify-center text-white text-xl"
        >
          {/* Seu amigo irá colocar o vídeo/canvas aqui */}
          Câmera ao vivo será exibida aqui
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition">
          ⏺️ Iniciar Gravação
        </button>
        <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
          ⏹️ Parar Gravação
        </button>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
          📁 Ver Arquivos Gravados
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
