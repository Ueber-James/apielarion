// src/app.js
import express from 'express';
import cors from 'cors';          // <<< importe o cors
import characterRoutes from './routes/characterRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Habilita CORS para todas as origens
app.use(cors());                  
app.use(express.json());

// Rotas de personagens
app.use('/api/characters', characterRoutes);

// Error handler genérico
app.use((err, _req, res, _next) => {
  console.error(err);
   console.error(err.stack); 
  res.status(500).json({ error: 'Internal server error' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
