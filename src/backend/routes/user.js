import bcrypt from 'bcrypt';

// Rota para cadastrar usuário manualmente
router.post('/cadastro', async (req, res) => {
  const { nome, email, senha, telefone, cpf } = req.body;

  try {
    const conn = await pool.getConnection();

    // Verifica se já existe email ou CPF
    const [existe] = await conn.query(
      'SELECT id FROM usuarios_comuns WHERE email = ? OR cpf = ?',
      [email, cpf]
    );

    if (existe) {
      conn.release();
      return res.status(400).json({ error: 'Email ou CPF já cadastrados.' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    await conn.query(
      'INSERT INTO usuarios_comuns (nome, email, senha, telefone, cpf) VALUES (?, ?, ?, ?, ?)',
      [nome, email, senhaCriptografada, telefone, cpf]
    );

    conn.release();
    res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
  }
});
