import Prediction from '../models/Prediction.model.js';
import { getFailurePrediction } from '../services/mlService.js';
import { ApiError, ApiResponse } from '../utils/api.js';

export const createPrediction = async (req, res, next) => {
    const { deviceData } = req.body;

    if (!deviceData || Object.keys(deviceData).length === 0) {
        return next(new ApiError(400, "Device data is required."));
    }

    try {
        const result = await getFailurePrediction(deviceData);

        const newPrediction = new Prediction({
            // userId: req.user?._id, // Add this if you implement authentication on this route
            inputData: deviceData,
            predictionResult: result,
            modelVersion: result.modelVersion || 'unknown'
        });

        await newPrediction.save();

        res.status(201).json(new ApiResponse(201, newPrediction, "Prediction successful."));
    } catch (error) {
        return next(new ApiError(502, error.message)); // 502 Bad Gateway
    }
};