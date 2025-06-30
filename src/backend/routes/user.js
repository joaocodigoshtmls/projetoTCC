import bcrypt from "bcrypt"; // se ainda não tiver
import express from "express";
import pool from "../db.js";

const router = express.Router();

// ROTA DE LOGIN MANUAL
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const conn = await pool.getConnection();

    const resultado = await conn.query(
      'SELECT * FROM usuarios_comuns WHERE email = ?',
      [email]
    );

    conn.release();

    if (resultado.length === 0) {
      return res.status(401).json({ error: 'Email ou senha inválidos.' });
    }

    const usuario = resultado[0];
    const senhaConfere = await bcrypt.compare(senha, usuario.senha);

    if (!senhaConfere) {
      return res.status(401).json({ error: 'Email ou senha inválidos.' });
    }

    res.json({
      message: 'Login bem-sucedido',
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor ao fazer login.' });
  }
});

export default router;
