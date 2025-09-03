import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Your backend URL

const api = axios.create({
  baseURL: API_URL,
});

export const signup = (userData) => api.post('/signup', userData);
export const signin = (credentials) => api.post('/signin', credentials);
export const verifyEmail = (token) => api.get(`/verify-email?token=${token}`);
export const forgotPassword = (data) => api.post('/forgot-password', data);
export const verifyResetCode = (data) => api.post('/verify-reset-code', data);
export const resetPassword = (data) => api.post('/reset-password', data);
export const getPrediction = (deviceData) => api.post('/api/predict', { deviceData });
export const getLatestPrediction = () => api.get('/api/predict/latest');
export const getAllPredictions = () => api.get('/api/predictAll');
export const predict = async (data) => api.post('api/predict', data); 



export default api;