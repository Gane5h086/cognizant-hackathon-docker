// // // // // import React from 'react';
// // // // // import { useAuth } from '../hooks/useAuth';

// // // // // const DashboardPage = () => {
// // // // //   const { user } = useAuth();

// // // // //   return (
// // // // //     <div className="p-6 bg-white rounded-lg shadow">
// // // // //       <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
// // // // //       <p className="mt-2 text-text-secondary">
// // // // //         Welcome back, {user?.firstName} {user?.lastName}!
// // // // //       </p>
// // // // //       <div className="mt-6 p-4 border rounded-md">
// // // // //         <h2 className="text-xl font-semibold">Your Information</h2>
// // // // //         <p><strong>Email:</strong> {user?.email}</p>
// // // // //         <p><strong>Organization:</strong> {user?.organization}</p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DashboardPage;

// // // // import React, { useState, useEffect } from "react";
// // // // import { useLocation, useNavigate, Link } from "react-router-dom";
// // // // import SemiCircleGauge from "../components/common/SemiCircleGauge";
// // // // import jsPDF from "jspdf";
// // // // import "jspdf-autotable";

// // // // function DashboardPage() {
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();

// // // //   // Initialize state from location or redirect if no data is present
// // // //   const [dashboardData, setDashboardData] = useState(location.state?.predictionData);
// // // //   const [inputSnapshot, setInputSnapshot] = useState(location.state?.inputSnapshot);

// // // //   useEffect(() => {
// // // //     if (!dashboardData) {
// // // //       // If there's no data, redirect to the input form
// // // //       navigate("/predict");
// // // //     }
// // // //   }, [dashboardData, navigate]);

// // // //   const generatePDF = () => {
// // // //     const doc = new jsPDF();
// // // //     doc.setFontSize(16);
// // // //     doc.text("MedPredict Maintenance Report", 14, 20);
// // // //     doc.setFontSize(12);
// // // //     doc.text(`Model Version: ${dashboardData.modelVersion}`, 14, 30);
    
// // // //     autoTable(doc, {
// // // //       startY: 35,
// // // //       head: [["Prediction Result", "Value"]],
// // // //       body: [
// // // //         ["Status", dashboardData.prediction],
// // // //         ["Failure Risk (30 days)", `${dashboardData.failureRiskPercentage}%`],
// // // //         ["Recommendation", dashboardData.maintenanceRecommendation],
// // // //       ],
// // // //       theme: 'striped'
// // // //     });
    
// // // //     autoTable(doc, {
// // // //       startY: doc.lastAutoTable.finalY + 10,
// // // //       head: [["Input Parameter Snapshot", "Value"]],
// // // //       body: Object.entries(inputSnapshot),
// // // //       theme: 'grid'
// // // //     });

// // // //     doc.save("MedPredict_Report.pdf");
// // // //   };

// // // //   // Render a loading state or nothing if data is not yet available
// // // //   if (!dashboardData) {
// // // //     return <div className="d-flex justify-content-center align-items-center vh-100">Loading or Redirecting...</div>;
// // // //   }

// // // //   return (
// // // //     <div className="d-flex min-vh-100 bg-light">
// // // //       <aside className="sidebar p-4">
// // // //         <h2 className="logo mb-5 text-primary">MedPredict</h2>
// // // //         <ul className="list-unstyled fs-5">
// // // //           <li className="mb-3 active">Dashboard</li>
// // // //           <li className="mb-3">
// // // //              <Link to="/predict" className="text-decoration-none text-dark">New Prediction</Link>
// // // //           </li>
// // // //           <li>Account Settings</li>
// // // //         </ul>
// // // //       </aside>
// // // //       <main className="flex-grow-1 p-4">
// // // //         <section className="dashboard-header bg-white rounded-4 shadow-sm px-4 py-3 d-flex justify-content-between align-items-center mb-4">
// // // //           <div>
// // // //             <span className="fs-4 fw-bold text-dark">Prediction Results</span>
// // // //           </div>
// // // //           <div>
// // // //             <button className="btn btn-primary me-2" onClick={() => navigate('/predict')}>New Prediction</button>
// // // //             <button className="btn btn-success me-2" onClick={generatePDF}>
// // // //               Export PDF
// // // //             </button>
// // // //             <span className="profile-avatar ms-2"></span>
// // // //           </div>
// // // //         </section>

// // // //         <div className="d-flex gap-3 mb-4">
// // // //           <div className="card dashboard-card flex-fill">
// // // //             <div className="card-title">Failure Prediction</div>
// // // //             <div className={`display-5 fw-bold ${dashboardData.prediction === 'Failed' ? 'text-danger' : 'text-success'}`}>
// // // //               {dashboardData.prediction}
// // // //             </div>
// // // //             <div className="text-muted">
// // // //               Model Version: {dashboardData.modelVersion}
// // // //             </div>
// // // //           </div>
// // // //           <div className="card dashboard-card flex-fill">
// // // //             <div className="card-title">Maintenance Recommendation</div>
// // // //             <div className="h3 fw-bold text-dark">
// // // //               {dashboardData.maintenanceRecommendation}
// // // //             </div>
// // // //             <div className="text-muted">Based on prediction and input data</div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="d-flex gap-4">
// // // //           <div className="card dashboard-card flex-fill">
// // // //             <div className="card-title">Failure Risk Gauge</div>
// // // //             <div className="my-3 px-2 py-5 rounded bg-body-tertiary text-center">
// // // //               <SemiCircleGauge percent={dashboardData.failureRiskPercentage} />
// // // //             </div>
// // // //           </div>

// // // //           <div className="card dashboard-card" style={{ minWidth: "300px" }}>
// // // //             <div className="card-title text-dark fw-bold mb-2">
// // // //               Input Snapshot
// // // //             </div>
// // // //             <ul className="ps-0 mb-0">
// // // //               {Object.entries(inputSnapshot).map(([k, v]) => (
// // // //                 <li key={k} className="d-flex justify-content-between text-dark fs-6 mb-1">
// // // //                   <span>{k.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
// // // //                   <span className="fw-bold">{String(v)}</span>
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default DashboardPage;

// // // import React, { useState, useEffect } from "react";
// // // import SemiCircleGauge from "../components/common/SemiCircleGauge";
// // // import jsPDF from "jspdf";
// // // import autoTable from "jspdf-autotable";
// // // import { getPrediction } from "../api/authService"; // Import the new API function
// // // import { useAuth } from '../hooks/useAuth';

// // // function Dashboard() {
// // //   const { user } = useAuth();
// // //   const [dashboardData, setDashboardData] = useState({
// // //     org: "St. Mary's Health",
// // //     failureProbability: 27,
// // //     confidence: 82,
// // //     maintenance: {
// // //       recommendation: "Schedule in 2–3 weeks",
// // //       priority: "Medium",
// // //       priorityDesc: "Based on risk & cost",
// // //     },
// // //     inputSnapshot: {
// // //       "Age (months)": 36,
// // //       "Usage hrs/day": 8,
// // //       "Operational hours": 12400,
// // //       "Temperature Avg": "22°C",
// // //       Humidity: "48%",
// // //       "Vibration Avg": "0.35g",
// // //       "Voltage fluctuation": "3.1%",
// // //       "Last repair cost": "$1,250",
// // //       "Errors (24h)": 5,
// // //       "Device type": "MRI",
// // //     },
// // //   });

// // //   const [animatedRisk, setAnimatedRisk] = useState(
// // //     dashboardData.failureProbability
// // //   );

// // //   const fetchPrediction = async () => {
// // //     try {
// // //       const { data } = await getPrediction(dashboardData.inputSnapshot);
// // //       setDashboardData((prev) => ({
// // //         ...prev,
// // //         failureProbability: data.predictionResult.failure_probability,
// // //         confidence: data.predictionResult.confidence_score,
// // //       }));
// // //     } catch (error) {
// // //       console.error("Error fetching prediction:", error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchPrediction();
// // //   }, []);

// // //   useEffect(() => {
// // //     let start = animatedRisk;
// // //     let end = dashboardData.failureProbability;
// // //     let step = start < end ? 1 : -1;

// // //     if (start === end) return;

// // //     const interval = setInterval(() => {
// // //       start += step;
// // //       setAnimatedRisk(start);
// // //       if (start === end) clearInterval(interval);
// // //     }, 20);

// // //     return () => clearInterval(interval);
// // //   }, [dashboardData.failureProbability, animatedRisk]);

// // //   useEffect(() => {
// // //     let priority = "Low";
// // //     let priorityDesc = "Minimal risk detected";

// // //     if (dashboardData.failureProbability >= 80) {
// // //       priority = "High";
// // //       priorityDesc = "Immediate maintenance required";
// // //     } else if (dashboardData.failureProbability >= 50) {
// // //       priority = "Medium";
// // //       priorityDesc = "Based on risk & cost";
// // //     }

// // //     setDashboardData((prev) => ({
// // //       ...prev,
// // //       maintenance: {
// // //         ...prev.maintenance,
// // //         priority,
// // //         priorityDesc,
// // //       },
// // //     }));
// // //   }, [dashboardData.failureProbability]);

// // //   function handleRunAgain() {
// // //     fetchPrediction();
// // //   }

// // //   const generatePDF = () => {
// // //     const doc = new jsPDF();
// // //     doc.setFontSize(16);
// // //     doc.text("MedPredict Maintenance Report", 14, 20);
// // //     doc.setFontSize(12);
// // //     doc.text(`Organization: ${dashboardData.org}`, 14, 30);
// // //     doc.text(
// // //       `Failure Probability (30 days): ${dashboardData.failureProbability}%`,
// // //       14,
// // //       38
// // //     );
// // //     doc.text(`Confidence: ${dashboardData.confidence}%`, 14, 46);
// // //     doc.text(
// // //       `Maintenance Recommendation: ${dashboardData.maintenance.recommendation}`,
// // //       14,
// // //       54
// // //     );
// // //     doc.text(
// // //       `Maintenance Priority: ${dashboardData.maintenance.priority}`,
// // //       14,
// // //       62
// // //     );
// // //     doc.text(
// // //       `Priority Description: ${dashboardData.maintenance.priorityDesc}`,
// // //       14,
// // //       70
// // //     );
// // //     doc.text(`Failure Risk: ${dashboardData.failureProbability}%`, 14, 78);

// // //     autoTable(doc, {
// // //       startY: 85,
// // //       head: [["Parameter", "Value"]],
// // //       body: Object.entries(dashboardData.inputSnapshot),
// // //     });

// // //     doc.save("MedPredict_Report.pdf");
// // //   };

// // //   return (
// // //     <div className="flex min-h-screen bg-light">
// // //       <aside className="w-56 bg-gray-100 p-4">
// // //         <h2 className="text-3xl font-bold text-primary mb-5">MedPredict</h2>
// // //         <ul className="text-lg">
// // //           <li className="mb-3 bg-blue-100 text-primary rounded-lg p-2 cursor-pointer">Home</li>
// // //           <li className="hover:bg-blue-100 hover:text-primary rounded-lg p-2 cursor-pointer transition-colors">Account Settings</li>
// // //         </ul>
// // //       </aside>
// // //       <main className="flex-grow p-4">
// // //         <section className="bg-white rounded-2xl shadow-md px-4 py-3 flex justify-between items-center mb-4">
// // //           <div>
// // //             <span className="text-xl font-bold text-dark">Prediction Results</span>
// // //             <span className="bg-blue-100 text-primary rounded-full px-3 py-1 text-sm font-semibold ml-3">Org: {dashboardData.org}</span>
// // //           </div>
// // //           <div>
// // //             <button className="bg-primary text-white px-4 py-2 rounded-lg mr-2 hover:bg-primary-hover transition-shadow shadow-sm hover:shadow-lg">Model Input</button>
// // //             <button
// // //               className="bg-white text-primary border border-primary px-4 py-2 rounded-lg mr-2 hover:bg-gray-100 transition-shadow shadow-sm hover:shadow-lg"
// // //               onClick={handleRunAgain}
// // //             >
// // //               Run Again
// // //             </button>
// // //             <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600 transition-shadow shadow-sm hover:shadow-lg" onClick={generatePDF}>
// // //               Export
// // //             </button>
// // //             <span className="inline-block w-8 h-8 bg-gray-200 rounded-full ml-2 hover:shadow-lg transition-shadow"></span>
// // //           </div>
// // //         </section>

// // //         <div className="flex gap-3 mb-4">
// // //           <div className="flex-1 bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
// // //             <div className="text-gray-500 font-semibold mb-2">
// // //               Failure Probability (30 days)
// // //             </div>
// // //             <div className="text-5xl font-bold text-dark">
// // //               {dashboardData.failureProbability}%
// // //             </div>
// // //             <div className="text-gray-400">
// // //               Confidence: {dashboardData.confidence}%
// // //             </div>
// // //           </div>
// // //           <div className="flex-1 bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
// // //             <div className="text-gray-500 font-semibold mb-2">
// // //               Maintenance Recommendation
// // //             </div>
// // //             <div className="text-3xl font-bold text-green-600">
// // //               {dashboardData.maintenance.recommendation}
// // //             </div>
// // //             <div className="text-gray-400">Window before peak risk</div>
// // //           </div>
// // //           <div className="flex-1 bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
// // //             <div className="text-gray-500 font-semibold mb-2">
// // //               Maintenance Priority
// // //             </div>
// // //             <div
// // //               className={`text-3xl font-bold ${
// // //                 dashboardData.maintenance.priority === "High"
// // //                   ? "text-red-500"
// // //                   : dashboardData.maintenance.priority === "Medium"
// // //                   ? "text-yellow-500"
// // //                   : "text-green-500"
// // //               }`}
// // //             >
// // //               {dashboardData.maintenance.priority}
// // //             </div>
// // //             <div className="text-gray-400">
// // //               {dashboardData.maintenance.priorityDesc}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="flex gap-4">
// // //           <div className="flex-1 bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
// // //             <div className="text-gray-500 font-semibold mb-2">
// // //               Failure Risk Speedometer
// // //             </div>
// // //             <div className="my-3 px-2 py-5 rounded bg-gray-50 text-center text-blue-500">
// // //               <SemiCircleGauge percent={animatedRisk} />
// // //             </div>
// // //             <div className="flex justify-between text-sm text-blue-500 mb-2 px-2">
// // //               <span>Low</span>
// // //               <span>Medium</span>
// // //               <span>High</span>
// // //             </div>
// // //             <div className="font-bold text-primary text-right">
// // //               {dashboardData.failureProbability}% risk
// // //             </div>
// // //           </div>
// // //           <div className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow" style={{ minWidth: "260px" }}>
// // //             <div className="text-blue-500 font-bold mb-2">
// // //               Input Snapshot
// // //             </div>
// // //             <ul className="p-0 m-0">
// // //               {Object.entries(dashboardData.inputSnapshot).map(([k, v]) => (
// // //                 <li
// // //                   key={k}
// // //                   className="flex justify-between text-dark text-base mb-1 hover:bg-gray-50 p-1 rounded"
// // //                 >
// // //                   <span>{k}</span>
// // //                   <span>{v}</span>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // }

// // // export default Dashboard;

// // import React, { useState, useEffect } from "react";
// // import SemiCircleGauge from "../components/common/SemiCircleGauge";
// // import jsPDF from "jspdf";
// // import autoTable from "jspdf-autotable";
// // import { getPrediction, getLatestPrediction } from "../api/authService";
// // import { useAuth } from '../hooks/useAuth';

// // function Dashboard() {
// //   const { user } = useAuth();
// //   const [dashboardData, setDashboardData] = useState({
// //     org: "St. Mary's Health",
// //     failureProbability: 0,
// //     confidence: 0,
// //     maintenance: {
// //       recommendation: "Schedule in 2–3 weeks",
// //       priority: "Low",
// //       priorityDesc: "Minimal risk detected",
// //     },
// //     inputSnapshot: {
// //       "Age (months)": 36,
// //       "Usage hrs/day": 8,
// //       "Operational hours": 12400,
// //       "Temperature Avg": "22°C",
// //       Humidity: "48%",
// //       "Vibration Avg": "0.35g",
// //       "Voltage fluctuation": "3.1%",
// //       "Last repair cost": "$1,250",
// //       "Errors (24h)": 5,
// //       "Device type": "MRI",
// //     },
// //   });

// //   const [animatedRisk, setAnimatedRisk] = useState(0);

// //   const fetchLatestPrediction = async () => {
// //     try {
// //       const { data } = await getLatestPrediction();
// //       setDashboardData((prev) => ({
// //         ...prev,
// //         failureProbability: data.data.predictionResult.failure_probability,
// //         confidence: data.data.predictionResult.confidence_score,
// //         inputSnapshot: data.data.inputData,
// //       }));
// //     } catch (error) {
// //       console.error("Error fetching latest prediction:", error);
// //     }
// //   };

// //   const runNewPrediction = async () => {
// //     try {
// //       await getPrediction(dashboardData.inputSnapshot);
// //       fetchLatestPrediction(); // Fetch the latest prediction after running a new one
// //     } catch (error) {
// //       console.error("Error running new prediction:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchLatestPrediction();
// //   }, []);

// //   useEffect(() => {
// //     let start = animatedRisk;
// //     let end = dashboardData.failureProbability;
// //     let step = start < end ? 1 : -1;

// //     if (start === end) return;

// //     const interval = setInterval(() => {
// //       start += step;
// //       setAnimatedRisk(start);
// //       if (start === end) clearInterval(interval);
// //     }, 20);

// //     return () => clearInterval(interval);
// //   }, [dashboardData.failureProbability, animatedRisk]);

// //   useEffect(() => {
// //     let priority = "Low";
// //     let priorityDesc = "Minimal risk detected";

// //     if (dashboardData.failureProbability >= 80) {
// //       priority = "High";
// //       priorityDesc = "Immediate maintenance required";
// //     } else if (dashboardData.failureProbability >= 50) {
// //       priority = "Medium";
// //       priorityDesc = "Based on risk & cost";
// //     }

// //     setDashboardData((prev) => ({
// //       ...prev,
// //       maintenance: {
// //         ...prev.maintenance,
// //         priority,
// //         priorityDesc,
// //       },
// //     }));
// //   }, [dashboardData.failureProbability]);

// //   const generatePDF = () => {
// //     const doc = new jsPDF();
// //     doc.setFontSize(16);
// //     doc.text("MedPredict Maintenance Report", 14, 20);
// //     doc.setFontSize(12);
// //     doc.text(`Organization: ${dashboardData.org}`, 14, 30);
// //     doc.text(
// //       `Failure Probability (30 days): ${dashboardData.failureProbability}%`,
// //       14,
// //       38
// //     );
// //     doc.text(`Confidence: ${dashboardData.confidence}%`, 14, 46);
// //     doc.text(
// //       `Maintenance Recommendation: ${dashboardData.maintenance.recommendation}`,
// //       14,
// //       54
// //     );
// //     doc.text(
// //       `Maintenance Priority: ${dashboardData.maintenance.priority}`,
// //       14,
// //       62
// //     );
// //     doc.text(
// //       `Priority Description: ${dashboardData.maintenance.priorityDesc}`,
// //       14,
// //       70
// //     );
// //     doc.text(`Failure Risk: ${dashboardData.failureProbability}%`, 14, 78);

// //     autoTable(doc, {
// //       startY: 85,
// //       head: [["Parameter", "Value"]],
// //       body: Object.entries(dashboardData.inputSnapshot),
// //     });

// //     doc.save("MedPredict_Report.pdf");
// //   };

// //   return (
// //     <div className="flex min-h-screen bg-light">
// //       <aside className="w-56 bg-gray-100 p-4">
// //         <h2 className="text-3xl font-bold text-primary mb-5">MedPredict</h2>
// //         <ul className="text-lg">
// //           <li className="mb-3 bg-blue-100 text-primary rounded-lg p-2 cursor-pointer">Home</li>
// //           <li className="hover:bg-blue-100 hover:text-primary rounded-lg p-2 cursor-pointer transition-colors">Account Settings</li>
// //         </ul>
// //       </aside>
// //       <main className="flex-grow p-4">
// //         <section className="bg-white rounded-2xl shadow-md px-4 py-3 flex justify-between items-center mb-4">
// //           <div>
// //             <span className="text-xl font-bold text-dark">Prediction Results</span>
// //             <span className="bg-blue-100 text-primary rounded-full px-3 py-1 text-sm font-semibold ml-3">Org: {dashboardData.org}</span>
// //           </div>
// //           <div>
// //             <button className="bg-primary text-white px-4 py-2 rounded-lg mr-2 hover:bg-primary-hover transition-shadow shadow-sm hover:shadow-lg">Model Input</button>
// //             <button
// //               className="bg-white text-primary border border-primary px-4 py-2 rounded-lg mr-2 hover:bg-gray-100 transition-shadow shadow-sm hover:shadow-lg"
// //               onClick={runNewPrediction}
// //             >
// //               Run Again
// //             </button>
// //             <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600 transition-shadow shadow-sm hover:shadow-lg" onClick={generatePDF}>
// //               Export
// //             </button>
// //             <span className="inline-block w-8 h-8 bg-gray-200 rounded-full ml-2 hover:shadow-lg transition-shadow"></span>
// //           </div>
// //         </section>

// //         <div className="flex gap-3 mb-4">
// //           <div className="flex-1 bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
// //             <div className="text-gray-500 font-semibold mb-2">
// //               Failure Probability (30 days)
// //             </div>
// //             <div className="text-5xl font-bold text-dark">
// //               {dashboardData.failureProbability}%
// //             </div>
// //             <div className="text-gray-400">
// //               Confidence: {dashboardData.confidence}%
// //             </div>
// //           </div>
// //           <div className="flex-1 bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
// //             <div className="text-gray-500 font-semibold mb-2">
// //               Maintenance Recommendation
// //             </div>
// //             <div className="text-3xl font-bold text-green-600">
// //               {dashboardData.maintenance.recommendation}
// //             </div>
// //             <div className="text-gray-400">Window before peak risk</div>
// //           </div>
// //           <div className="flex-1 bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
// //             <div className="text-gray-500 font-semibold mb-2">
// //               Maintenance Priority
// //             </div>
// //             <div
// //               className={`text-3xl font-bold ${
// //                 dashboardData.maintenance.priority === "High"
// //                   ? "text-red-500"
// //                   : dashboardData.maintenance.priority === "Medium"
// //                   ? "text-yellow-500"
// //                   : "text-green-500"
// //               }`}
// //             >
// //               {dashboardData.maintenance.priority}
// //             </div>
// //             <div className="text-gray-400">
// //               {dashboardData.maintenance.priorityDesc}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="flex gap-4">
// //           <div className="flex-1 bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
// //             <div className="text-gray-500 font-semibold mb-2">
// //               Failure Risk Speedometer
// //             </div>
// //             <div className="my-3 px-2 py-5 rounded bg-gray-50 text-center text-blue-500">
// //               <SemiCircleGauge percent={animatedRisk} />
// //             </div>
// //             <div className="flex justify-between text-sm text-blue-500 mb-2 px-2">
// //               <span>Low</span>
// //               <span>Medium</span>
// //               <span>High</span>
// //             </div>
// //             <div className="font-bold text-primary text-right">
// //               {dashboardData.failureProbability}% risk
// //             </div>
// //           </div>
// //           <div className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow" style={{ minWidth: "260px" }}>
// //             <div className="text-blue-500 font-bold mb-2">
// //               Input Snapshot
// //             </div>
// //             <ul className="p-0 m-0">
// //               {Object.entries(dashboardData.inputSnapshot).map(([k, v]) => (
// //                 <li
// //                   key={k}
// //                   className="flex justify-between text-dark text-base mb-1 hover:bg-gray-50 p-1 rounded"
// //                 >
// //                   <span>{k}</span>
// //                   <span>{v}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // export default Dashboard;

// import React, { useState, useEffect } from "react";
// import SemiCircleGauge from "../components/common/SemiCircleGauge";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
// import { getPrediction, getLatestPrediction } from "../api/authService";
// import { useAuth } from '../hooks/useAuth';

// function Dashboard() {
//   const { user } = useAuth();
//   const [dashboardData, setDashboardData] = useState({
//     org: "St. Mary's Health",
//     failureProbability: 0,
//     confidence: 0,
//     maintenance: {
//       recommendation: "Awaiting data...",
//       priority: "Low",
//       priorityDesc: "Minimal risk detected",
//     },
//     inputSnapshot: {
//       "Age (months)": 0,
//       "Usage hrs/day": 0,
//       "Operational hours": 0,
//       "Temperature Avg": "0°C",
//       Humidity: "0%",
//       "Vibration Avg": "0g",
//       "Voltage fluctuation": "0%",
//       "Last repair cost": "$0",
//       "Errors (24h)": 0,
//       "Device type": "N/A",
//     },
//   });

//   const [animatedRisk, setAnimatedRisk] = useState(0);

//   const fetchLatestPrediction = async () => {
//     try {
//       const { data } = await getLatestPrediction();
//       const result = data.data; // API response data
//       setDashboardData((prev) => ({
//         ...prev,
//         failureProbability: Math.round(result.predictionResult.failure_probability),
//         confidence: Math.round(result.predictionResult.confidence_score),
//         inputSnapshot: result.inputData,
//         maintenance: {
//           ...prev.maintenance,
//           recommendation: result.predictionResult.maintenanceRecommendation,
//         },
//       }));
//     } catch (error) {
//       console.error("Error fetching latest prediction:", error);
//     }
//   };

//   const runNewPrediction = async () => {
//     try {
//       await getPrediction(dashboardData.inputSnapshot);
//       fetchLatestPrediction();
//     } catch (error) {
//       console.error("Error running new prediction:", error);
//     }
//   };

//   useEffect(() => {
//     fetchLatestPrediction();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     let start = animatedRisk;
//     let end = dashboardData.failureProbability;
    
//     // Ensure start is an integer
//     start = Math.round(start);

//     if (start === end) return;

//     let step = start < end ? 1 : -1;

//     const interval = setInterval(() => {
//       start += step;
//       setAnimatedRisk(start);
//       if (start === end) clearInterval(interval);
//     }, 20);

//     return () => clearInterval(interval);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [dashboardData.failureProbability]);

//   useEffect(() => {
//     let priority = "Low";
//     let priorityDesc = "Minimal risk detected";

//     if (dashboardData.failureProbability >= 80) {
//       priority = "High";
//       priorityDesc = "Immediate maintenance required";
//     } else if (dashboardData.failureProbability >= 50) {
//       priority = "Medium";
//       priorityDesc = "Based on risk & cost";
//     }

//     setDashboardData((prev) => ({
//       ...prev,
//       maintenance: {
//         ...prev.maintenance,
//         priority,
//         priorityDesc,
//       },
//     }));
//   }, [dashboardData.failureProbability]);

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text("MedPredict Maintenance Report", 14, 20);
//     doc.setFontSize(12);
//     doc.text(`Organization: ${dashboardData.org}`, 14, 30);
//     doc.text(
//       `Failure Probability (30 days): ${dashboardData.failureProbability}%`,
//       14,
//       38
//     );
//     doc.text(`Confidence: ${dashboardData.confidence}%`, 14, 46);
//     doc.text(
//       `Maintenance Recommendation: ${dashboardData.maintenance.recommendation}`,
//       14,
//       54
//     );
//     doc.text(
//       `Maintenance Priority: ${dashboardData.maintenance.priority}`,
//       14,
//       62
//     );
//     doc.text(
//       `Priority Description: ${dashboardData.maintenance.priorityDesc}`,
//       14,
//       70
//     );
//     doc.text(`Failure Risk: ${dashboardData.failureProbability}%`, 14, 78);

//     autoTable(doc, {
//       startY: 85,
//       head: [["Parameter", "Value"]],
//       body: Object.entries(dashboardData.inputSnapshot),
//     });

//     doc.save("MedPredict_Report.pdf");
//   };

//   return (
//     <div className="flex min-h-screen bg-light">
//       <aside className="w-56 bg-gray-100 p-4">
//         <h2 className="text-3xl font-bold text-primary mb-5">MedPredict</h2>
//         <ul className="text-lg">
//           <li className="mb-3 bg-blue-100 text-primary rounded-lg p-2 cursor-pointer">Home</li>
//           <li className="hover:bg-blue-100 hover:text-primary rounded-lg p-2 cursor-pointer transition-colors">Account Settings</li>
//         </ul>
//       </aside>
//       <main className="flex-grow p-4">
//         <section className="bg-white rounded-2xl shadow-md px-4 py-3 flex justify-between items-center mb-4">
//           <div>
//             <span className="text-xl font-bold text-dark">Prediction Results</span>
//             <span className="bg-blue-100 text-primary rounded-full px-3 py-1 text-sm font-semibold ml-3">Org: {dashboardData.org}</span>
//           </div>
//           <div>
//             <button className="bg-primary text-white px-4 py-2 rounded-lg mr-2 hover:bg-primary-hover transition-shadow shadow-sm hover:shadow-lg">Model Input</button>
//             <button
//               className="bg-white text-primary border border-primary px-4 py-2 rounded-lg mr-2 hover:bg-gray-100 transition-shadow shadow-sm hover:shadow-lg"
//               onClick={runNewPrediction}
//             >
//               Run Again
//             </button>
//             <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600 transition-shadow shadow-sm hover:shadow-lg" onClick={generatePDF}>
//               Export
//             </button>
//             <span className="inline-block w-8 h-8 bg-gray-200 rounded-full ml-2 hover:shadow-lg transition-shadow"></span>
//           </div>
//         </section>

//         <div className="flex gap-3 mb-4">
//           <div className="flex-1 bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
//             <div className="text-gray-500 font-semibold mb-2">
//               Failure Probability (30 days)
//             </div>
//             {/* ✅ FIX: Use animatedRisk for synchronized display */}
//             <div className="text-5xl font-bold text-dark">
//               {animatedRisk}%
//             </div>
//             <div className="text-gray-400">
//               Confidence: {dashboardData.confidence}%
//             </div>
//           </div>
//           <div className="flex-1 bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
//             <div className="text-gray-500 font-semibold mb-2">
//               Maintenance Recommendation
//             </div>
//             <div className="text-2xl font-bold text-green-600">
//               {dashboardData.maintenance.recommendation}
//             </div>
//             <div className="text-gray-400">Window before peak risk</div>
//           </div>
//           <div className="flex-1 bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
//             <div className="text-gray-500 font-semibold mb-2">
//               Maintenance Priority
//             </div>
//             <div
//               className={`text-3xl font-bold ${
//                 dashboardData.maintenance.priority === "High"
//                   ? "text-red-500"
//                   : dashboardData.maintenance.priority === "Medium"
//                   ? "text-yellow-500"
//                   : "text-green-500"
//               }`}
//             >
//               {dashboardData.maintenance.priority}
//             </div>
//             <div className="text-gray-400">
//               {dashboardData.maintenance.priorityDesc}
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <div className="flex-1 bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
//             <div className="text-gray-500 font-semibold mb-2">
//               Failure Risk Speedometer
//             </div>
//             <div className="my-3 px-2 py-5 rounded bg-gray-50 text-center text-blue-500">
//               <SemiCircleGauge percent={animatedRisk} />
//             </div>
//             <div className="flex justify-between text-sm text-blue-500 mb-2 px-2">
//               <span>Low</span>
//               <span>Medium</span>
//               <span>High</span>
//             </div>
//              {/* ✅ FIX: Use animatedRisk for synchronized display */}
//             <div className="font-bold text-primary text-right">
//               {animatedRisk}% risk
//             </div>
//           </div>
//           <div className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow" style={{ minWidth: "260px" }}>
//             <div className="text-blue-500 font-bold mb-2">
//               Input Snapshot
//             </div>
//             <ul className="p-0 m-0">
//               {Object.entries(dashboardData.inputSnapshot).map(([k, v]) => (
//                 <li
//                   key={k}
//                   className="flex justify-between text-dark text-base mb-1 hover:bg-gray-50 p-1 rounded capitalize"
//                 >
//                   <span>{k.replace(/_/g, ' ')}</span>
//                   <span>{v}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Dashboard;

import React, { useState, useEffect } from "react";
import SemiCircleGauge from "../components/common/SemiCircleGauge";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { getPrediction, getLatestPrediction } from "../api/authService";
import { useAuth } from '../hooks/useAuth';

function Dashboard() {
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState({
    org: "St. Mary's Health",
    failureProbability: 0,
    confidence: 0,
    maintenance: {
      recommendation: "Awaiting data...",
      priority: "Low",
      priorityDesc: "Minimal risk detected",
    },
    inputSnapshot: {
      "Age (months)": 0,
      "Usage hrs/day": 0,
      "Operational hours": 0,
      "Temperature Avg": "0°C",
      Humidity: "0%",
      "Vibration Avg": "0g",
      "Voltage fluctuation": "0%",
      "Last repair cost": "$0",
      "Errors (24h)": 0,
      "Device type": "N/A",
    },
  });

  const [animatedRisk, setAnimatedRisk] = useState(0);

  const fetchLatestPrediction = async () => {
    try {
      const { data } = await getLatestPrediction();
      const result = data.data;
      setDashboardData((prev) => ({
        ...prev,
        failureProbability: Math.round(result.predictionResult.failure_probability),
        confidence: Math.round(result.predictionResult.confidence_score),
        inputSnapshot: result.inputData,
        maintenance: {
          ...prev.maintenance,
          recommendation: result.predictionResult.maintenanceRecommendation,
        },
      }));
    } catch (error) {
      console.error("Error fetching latest prediction:", error);
    }
  };

  const runNewPrediction = async () => {
    try {
      await getPrediction(dashboardData.inputSnapshot);
      fetchLatestPrediction();
    } catch (error) {
      console.error("Error running new prediction:", error);
    }
  };

  useEffect(() => {
    fetchLatestPrediction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let start = Math.round(animatedRisk);
    let end = dashboardData.failureProbability;
    
    if (start === end) return;

    let step = start < end ? 1 : -1;

    const interval = setInterval(() => {
      start += step;
      setAnimatedRisk(start);
      if (start === end) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dashboardData.failureProbability]);

  useEffect(() => {
    let priority = "Low";
    let priorityDesc = "Minimal risk detected";

    if (dashboardData.failureProbability >= 80) {
      priority = "High";
      priorityDesc = "Immediate maintenance required";
    } else if (dashboardData.failureProbability >= 50) {
      priority = "Medium";
      priorityDesc = "Based on risk & cost";
    }

    setDashboardData((prev) => ({
      ...prev,
      maintenance: {
        ...prev.maintenance,
        priority,
        priorityDesc,
      },
    }));
  }, [dashboardData.failureProbability]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("MedPredict Maintenance Report", 14, 20);
    doc.setFontSize(12);
    doc.text(`Organization: ${dashboardData.org}`, 14, 30);
    doc.text(
      `Failure Probability (30 days): ${dashboardData.failureProbability}%`,
      14,
      38
    );
    doc.text(`Confidence: ${dashboardData.confidence}%`, 14, 46);
    doc.text(
      `Maintenance Recommendation: ${dashboardData.maintenance.recommendation}`,
      14,
      54
    );
    doc.text(
      `Maintenance Priority: ${dashboardData.maintenance.priority}`,
      14,
      62
    );
    doc.text(
      `Priority Description: ${dashboardData.maintenance.priorityDesc}`,
      14,
      70
    );
    doc.text(`Failure Risk: ${dashboardData.failureProbability}%`, 14, 78);

    autoTable(doc, {
      startY: 85,
      head: [["Parameter", "Value"]],
      body: Object.entries(dashboardData.inputSnapshot),
    });

    doc.save("MedPredict_Report.pdf");
  };

  return (
    <div className="flex-grow p-4">
        <section className="bg-white rounded-2xl shadow-md px-4 py-3 flex justify-between items-center mb-4">
          <div>
            <span className="text-xl font-bold text-dark">Prediction Results</span>
            <span className="bg-blue-100 text-primary rounded-full px-3 py-1 text-sm font-semibold ml-3">Org: {dashboardData.org}</span>
          </div>
          <div>
            <button className="bg-primary text-white px-4 py-2 rounded-lg mr-2 hover:bg-primary-hover transition-shadow shadow-sm hover:shadow-lg">Model Input</button>
            <button
              className="bg-white text-primary border border-primary px-4 py-2 rounded-lg mr-2 hover:bg-gray-100 transition-shadow shadow-sm hover:shadow-lg"
              onClick={runNewPrediction}
            >
              Run Again
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600 transition-shadow shadow-sm hover:shadow-lg" onClick={generatePDF}>
              Export
            </button>
            <span className="inline-block w-8 h-8 bg-gray-200 rounded-full ml-2 hover:shadow-lg transition-shadow"></span>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
            <div className="text-gray-500 font-semibold mb-2">
              Failure Probability (30 days)
            </div>
            <div className="text-5xl font-bold text-dark">
              {animatedRisk}%
            </div>
            <div className="text-gray-400">
              Confidence: {dashboardData.confidence}%
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
            <div className="text-gray-500 font-semibold mb-2">
              Maintenance Recommendation
            </div>
            <div className="text-2xl font-bold text-green-600">
              {dashboardData.maintenance.recommendation}
            </div>
            <div className="text-gray-400">Window before peak risk</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
            <div className="text-gray-500 font-semibold mb-2">
              Maintenance Priority
            </div>
            <div
              className={`text-3xl font-bold ${
                dashboardData.maintenance.priority === "High"
                  ? "text-red-500"
                  : dashboardData.maintenance.priority === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              {dashboardData.maintenance.priority}
            </div>
            <div className="text-gray-400">
              {dashboardData.maintenance.priorityDesc}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
            <div className="text-gray-500 font-semibold mb-2">
              Failure Risk Speedometer
            </div>
            <div className="my-3 px-2 py-5 rounded bg-gray-50 text-center text-blue-500">
              <SemiCircleGauge percent={animatedRisk} />
            </div>
            <div className="flex justify-between text-sm text-blue-500 mb-2 px-2">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
            <div className="font-bold text-primary text-right">
              {animatedRisk}% risk
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl transition-shadow">
            <div className="text-blue-500 font-bold mb-2">
              Input Snapshot
            </div>
            <ul className="p-0 m-0 space-y-2">
              {Object.entries(dashboardData.inputSnapshot).map(([k, v]) => (
                <li
                  key={k}
                  className="flex justify-between text-dark text-base p-2 rounded transition-colors hover:bg-gray-50"
                >
                  <span className="capitalize">{k.replace(/_/g, ' ')}</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Dashboard;

