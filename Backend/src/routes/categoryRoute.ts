import express from "express";
import { createCategories, deleteCategories, getCategories, showCategories, updateCategories } from "../controllers/categoryController";

const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategories);
router.get("/:id", showCategories);
router.put("/:id", updateCategories);
router.delete("/:id", deleteCategories);

export default router;
