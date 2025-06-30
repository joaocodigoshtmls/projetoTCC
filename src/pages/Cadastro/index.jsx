const handleSubmit = async (e) => {
  e.preventDefault();

  const { fullName, email, password, confirmPassword, phone, cpf } = formData;

  if (password !== confirmPassword) {
    alert('As senhas não coincidem');
    return;
  }

  const dados = {
    nome: fullName,
    email,
    senha: password,
    telefone: phone,
    cpf
  };

  try {
    const response = await axios.post('http://localhost:3001/api/user/cadastro', dados);
    alert(response.data.message);
    // opcional: resetar o formulário
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      cpf: "",
    });
  } catch (error) {
    alert(error.response?.data?.error || 'Erro ao cadastrar');
  }
};
