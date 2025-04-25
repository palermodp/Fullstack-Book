const express = require("express");
const router = express.Router();
const {
  register,
  login,
  updateProfile,
  getProfile,
} = require("../controllers/authController");
const auth = require("../middlewares/authMiddleware");

// Rutas de autenticación
router.post("/register", register);
router.post("/login", login);
router.put("/profile", auth, updateProfile);
router.get("/profile", auth, getProfile);

module.exports = router;
