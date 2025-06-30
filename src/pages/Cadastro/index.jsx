import { useState } from "react";
import axios from "axios";

function Cadastro() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    cpf: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword, phone, cpf } = formData;

    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    const dados = {
      nome: fullName,
      email,
      senha: password,
      telefone: phone,
      cpf,
    };

    try {
      const response = await axios.post("http://localhost:3001/api/user/cadastro", dados);
      alert(response.data.message);
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        cpf: "",
      });
    } catch (error) {
      alert(error.response?.data?.error || "Erro ao cadastrar");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            alt="Login visual"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-center text-blue-600">Crie sua conta</h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input type="text" name="fullName" placeholder="Nome completo" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-2 border rounded-xl" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-xl" />
            <input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2 border rounded-xl" />
            <input type="password" name="confirmPassword" placeholder="Confirmar senha" value={formData.confirmPassword} onChange={handleChange} required className="w-full px-4 py-2 border rounded-xl" />
            <input type="tel" name="phone" placeholder="Telefone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border rounded-xl" />
            <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} required className="w-full px-4 py-2 border rounded-xl" />

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300">
              Cadastrar
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Já tem uma conta?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Faça login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
