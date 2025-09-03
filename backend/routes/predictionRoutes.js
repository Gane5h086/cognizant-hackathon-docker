// import express from "express";
// import { createPrediction } from "../controllers/predictionController.js";

// const router = express.Router();

// // Route will be POST /api/predict
// router.post("/predict", createPrediction);

// export default router;

import express from "express";
import { createPrediction, getLatestPrediction } from "../controllers/predictionController.js";

const router = express.Router();

// Route will be POST /api/predict
router.post("/predict", createPrediction);

// Route will be GET /api/predict/latest
router.get("/predict/latest", getLatestPrediction);

export default router;
