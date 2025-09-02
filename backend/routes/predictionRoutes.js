import express from "express";
import { createPrediction } from "../controllers/predictionController.js";

const router = express.Router();

// Route will be POST /api/predict
router.post("/predict", createPrediction);

export default router;