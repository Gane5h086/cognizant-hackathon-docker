from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

# Initialize the FastAPI app
app = FastAPI(
    title="Medical Device Failure Prediction API",
    version="1.0.0"
)

# Define the structure of the input data from the form
class DeviceAttributes(BaseModel):
    device_type: str = Field(..., example="X-Ray")
    device_id: str = Field(..., example="XR-12345")
    age_of_device: int = Field(..., example=10)
    temperature: int = Field(..., example=40)
    voltage_fluctuations: str = Field(..., example="Yes")
    humidity: int = Field(..., example=60)
    vibration_level: str = Field(..., example="Low")
    error_counts: int = Field(..., example=4)
    last_serviced_date: str = Field(..., example="25/11/2023")

# --- DUMMY ML MODEL LOGIC ---
# This function simulates your real ML model.
# When ready, replace this logic with loading and running your actual model.
def get_dummy_prediction(data: DeviceAttributes) -> float:
    risk_score = 0.0
    if data.age_of_device > 8: risk_score += 25
    if data.temperature > 38: risk_score += 20
    if data.error_counts > 3: risk_score += 35
    if data.voltage_fluctuations.lower() == "yes": risk_score += 15
    return min(risk_score, 100.0)

@app.post("/predict")
async def predict_failure(device_data: DeviceAttributes):
    """
    Receives device data and returns a predicted failure risk percentage.
    """
    try:
        risk_percentage = get_dummy_prediction(device_data)
        # The structure of this response can be changed later.
        # The Express backend is designed to handle any valid JSON object.
        return {
            "failureRiskPercentage": risk_percentage,
            "modelVersion": "1.0.0-dummy"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --- How to Run ---
# 1. In a new terminal, navigate to the ml_service folder.
# 2. Create and activate a virtual environment:
#    python -m venv venv
#    source venv/bin/activate  (or venv\Scripts\activate on Windows)
# 3. Install dependencies: pip install -r requirements.txt
# 4. Start the server: uvicorn main:app --reload --port 8000