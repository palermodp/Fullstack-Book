import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const startServer = async () => {
  try {
    // Test database connection
    const connection = await pool.getConnection();
    console.log('Conectado a la base de datos MySQL');
    connection.release();

    // Middlewares
    app.use(cors({
      origin: 'http://localhost:5173',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    }));
    app.use(express.json());

    // Import routes
    const { default: authRouter } = await import('./routes/auth.routes.js');
    
    // Routes
    app.use('/api/auth', authRouter);

    const PORT = process.env.PORT || 5002;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

startServer();

export { pool };
