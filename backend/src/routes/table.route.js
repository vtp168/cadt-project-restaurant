import express from "express";
import { getTables, createTable, updateTable } from "../controllers/tableController.js";
import { protect, managerOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getTables);
router.post("/", protect, managerOnly, createTable);
router.put("/:id", protect, updateTable);

export default router;
