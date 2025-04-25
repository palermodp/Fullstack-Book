const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { register, login, updateProfile, getProfile } = require('../controllers/authController');

// Rutas
router.post('/register', register);
router.post('/login', login);
router.put('/profile', auth, updateProfile);
router.get('/profile', auth, getProfile);

module.exports = router;