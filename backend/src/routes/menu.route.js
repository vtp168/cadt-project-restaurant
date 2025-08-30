import express from "express";
import { getMenus, createMenu, updateMenu, deleteMenu } from "../controllers/menuController.js";
import { protect, managerOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getMenus);
router.post("/", protect, managerOnly, createMenu);
router.put("/:id", protect, managerOnly, updateMenu);
router.delete("/:id", protect, managerOnly, deleteMenu);

export default router;
