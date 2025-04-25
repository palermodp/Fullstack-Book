import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../server.js';

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log('Intento de registro:', { name, email });

    const [existingUser] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "El email ya está registrado" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [result] = await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    const token = jwt.sign({ id: result.insertId }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      message: "Usuario registrado exitosamente",
      token,
      user: {
        id: result.insertId,
        name,
        email,
      },
    });
  } catch (error) {
    console.error('Error detallado en registro:', error);
    res.status(500).json({ 
      message: "Error en el servidor",
      error: error.message 
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Extraer email y password correctamente
    const emailToUse = typeof email === 'object' ? email.email : email;
    const passwordToUse = typeof email === 'object' ? email.password : password;
    
    console.log('Datos procesados:', { 
      email: emailToUse, 
      hasPassword: !!passwordToUse 
    });

    const [testConnection] = await pool.execute('SELECT DATABASE() as db');
    console.log('Base de datos actual:', testConnection[0].db);

    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE LOWER(email) = LOWER(?)',
      [emailToUse]
    );
    
    console.log('Detalles de búsqueda:', {
      emailBuscado: emailToUse,
      encontrados: rows.length,
      datosUsuario: rows[0] ? {
        id: rows[0].id,
        email: rows[0].email,
        tienePassword: !!rows[0].password,
        longitudPassword: rows[0].password?.length
      } : null
    });

    if (rows.length === 0) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    const user = rows[0];
    const validPassword = await bcrypt.compare(passwordToUse, user.password);
    console.log('Validación de contraseña:', {
      passwordRecibido: !!passwordToUse,
      passwordAlmacenado: !!user.password,
      esValido: validPassword
    });

    if (!validPassword) {
      console.log('Contraseña incorrecta para usuario:', user.email);
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      message: "Login exitoso",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ 
      message: "Error en el servidor",
      error: error.message 
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const { id } = req.user;

    const [users] = await pool.query(
      "SELECT id, name, email FROM users WHERE id = ?",
      [id]
    );

    if (users.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({ user: users[0] });
  } catch (error) {
    console.error('Error detallado en getProfile:', error);
    res.status(500).json({ message: "Error al obtener el perfil" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const { name, email } = req.body;

    const updates = [];
    const values = [];

    if (name) {
      updates.push("name = ?");
      values.push(name);
    }
    if (email) {
      updates.push("email = ?");
      values.push(email);
    }

    if (updates.length > 0) {
      values.push(id);
      await pool.query(
        `UPDATE users SET ${updates.join(", ")} WHERE id = ?`,
        values
      );
    }

    const [updatedUser] = await pool.query(
      "SELECT id, name, email FROM users WHERE id = ?",
      [id]
    );

    res.json({
      message: "Perfil actualizado exitosamente",
      user: updatedUser[0],
    });
  } catch (error) {
    console.error("Error detallado en updateProfile:", error);
    res.status(500).json({ message: "Error al actualizar el perfil" });
  }
};

export {
  register,
  login,
  getProfile,
  updateProfile
};
