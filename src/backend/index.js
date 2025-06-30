import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
