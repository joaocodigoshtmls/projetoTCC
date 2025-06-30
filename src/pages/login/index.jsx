import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../../firebase";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuario");
    if (usuarioLogado) {
      navigate("/home");
    }
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userData = {
        nome: result.user.displayName,
        email: result.user.email,
      };
      localStorage.setItem("usuario", JSON.stringify(userData));
      alert("Login com Google realizado!");
      navigate("/home");
    } catch (error) {
      console.error("Erro no login com Google:", error);
      alert("Erro ao logar com Google.");
    }
  };

  const handleEmailLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/user/login", {
        email,
        senha,
      });

      localStorage.setItem("usuario", JSON.stringify(res.data.usuario));
      alert("Login realizado com sucesso!");
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.error || "Erro ao fazer login");
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Imagem */}
        <div className="lg:w-1/2 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80"
            alt="Login visual"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Formulário */}
        <div className="w-full lg:w-1/2 p-10">
          <div className="flex justify-center mb-4">
            <img
              className="w-auto h-8"
              src="https://merakiui.com/images/logo.svg"
              alt="Logo"
            />
          </div>

          <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">
            Bem-vindo de volta!
          </h2>

          {/* Login com Google */}
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full text-purple-600 border border-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition"
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="20" fill="#4285F4" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fill="#fff"
                dy=".3em"
                fontSize="18"
              >
                G
              </text>
            </svg>
            Sign in with Google
          </button>

          <div className="flex items-center justify-between my-6">
            <span className="w-1/5 border-b"></span>
            <span className="text-xs text-gray-500 uppercase">
              OU LOGIN COM EMAIL
            </span>
            <span className="w-1/5 border-b"></span>
          </div>

          {/* Inputs */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <div className="flex justify-between">
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Senha
              </label>
              <a href="#" className="text-xs text-purple-600 hover:underline">
                Esqueci a senha
              </a>
            </div>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          {/* Botão */}
          <button
            onClick={handleEmailLogin}
            className="w-full px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition"
          >
            Entrar
          </button>

          <div className="flex items-center justify-between mt-6">
            <span className="w-1/5 border-b"></span>
            <Link
              to="/cadastro"
              className="text-xs text-purple-600 uppercase hover:underline"
            >
              Criar Conta
            </Link>
            <span className="w-1/5 border-b"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
