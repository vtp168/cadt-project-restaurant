import express from "express";
import { register, login } from "../controllers/authController.js";
import { protect, managerOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", protect, managerOnly, register); // only manager can add users
router.post("/login", login);

export default router;
