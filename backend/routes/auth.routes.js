import express from 'express';
import { register, login, getProfile, updateProfile } from '../controllers/authController.js';
import { auth } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/profile", auth, updateProfile);
router.get("/profile", auth, getProfile);

export default router;