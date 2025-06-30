import React, { useState, useEffect } from "react";
import axios from "axios";

const Configuracoes = () => {
  const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
  });

  useEffect(() => {
    if (usuarioLocal) {
      setFormData({
        nome: usuarioLocal.nome || "",
        telefone: usuarioLocal.telefone || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put("http://localhost:3001/api/user/atualizar", {
        email: usuarioLocal.email,
        nome: formData.nome,
        telefone: formData.telefone,
      });

      localStorage.setItem(
        "usuario",
        JSON.stringify({ ...usuarioLocal, nome: formData.nome, telefone: formData.telefone })
      );

      alert(response.data.message || "Dados atualizados com sucesso!");
    } catch (err) {
      alert(err.response?.data?.error || "Erro ao atualizar dados.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-start justify-center p-10">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="Avatar"
            className="w-24 h-24 rounded-full shadow-lg mb-4"
          />
          <h1 className="text-3xl font-bold text-blue-700 mb-2">Configurações da Conta</h1>
          <p className="text-sm text-gray-500 text-center">
            Atualize seu nome e telefone.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Telefone</label>
            <input
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
          >
            Salvar Alterações
          </button>
        </form>
      </div>
    </div>
  );
};

export default Configuracoes;
