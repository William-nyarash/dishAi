import { Router } from "express";
import multer from "multer";
import { createMeal } from "../controllers/mealsController.js";
const router = Router();

const upload = multer();
router.post("/meal",upload.single("image"), createMeal);

export default  router;