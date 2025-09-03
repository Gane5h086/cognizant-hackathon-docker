// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import Button from '../components/common/Button';
// // import { Logo } from '../components/icons/Icons';

// // const LandingPage = () => {
// //     return (
// //         <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
// //             <Logo className="h-16 w-16 text-primary mb-4" />
// //             <h1 className="text-5xl font-extrabold text-text-primary">
// //                 Welcome to MedPredict Portal
// //             </h1>
// //             <p className="mt-4 text-lg text-text-secondary max-w-2xl">
// //                 Access your dashboard to monitor equipment reliability, set up alerts, and gain insights from predictive models.
// //             </p>
// //             <div className="mt-8 flex gap-4">
// //                 <Link to="/login">
// //                     <Button variant="primary">Login</Button>
// //                 </Link>
// //                 <Link to="/signup">
// //                     <Button variant="secondary">Sign Up</Button>
// //                 </Link>
// //             </div>
// //         </div>
// //     );
// // };

// // export default LandingPage;

// import React from "react";
// import Navbar from "../components/navbar/navbar";
// import Footer from "../components/Footer/Footer";
// import heroImg from "../assets/images/hero.jpg";
// import featureImg from "../assets/images/feature.jpg";

// const LandingPage = () => (
//   <div className="min-h-screen bg-gray-50 flex flex-col items-center font-sans">
//     <Navbar />
//     <main className="container mx-auto flex flex-col gap-11 px-4 pt-16">
//       <section className="bg-gradient-to-b from-blue-50 to-gray-100 rounded-2xl shadow-xl p-8 md:p-14 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-4">
//           AI-driven maintenance for medical equipment
//         </h2>
//         <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
//           Use predictive maintenance and reliability analytics to keep critical
//           devices online. Lower downtime and costs with automated alerts and
//           actionable insights.
//         </p>
//         <div className="flex justify-center gap-6 mb-4">
//           <button className="bg-blue-700 text-white font-semibold py-3 px-10 rounded-xl shadow-md hover:bg-blue-800 transition-all">
//             Sign Up
//           </button>
//           <button className="bg-blue-100 text-blue-700 font-semibold py-3 px-10 rounded-xl border-2 border-blue-700 hover:bg-blue-200 transition-all">
//             Login
//           </button>
//         </div>
//         <div className="text-gray-500 mt-5 mb-3">
//           Trusted by hospitals, clinics & labs
//         </div>
//         <img
//           src={heroImg}
//           alt="Medical Equipment Banner"
//           className="mt-8 mx-auto max-w-lg w-full rounded-2xl shadow-2xl"
//         />
//       </section>

//       <section className="bg-blue-50 rounded-2xl shadow-lg p-8 md:p-12 mb-12">
//         <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">
//           Why MedPredict
//         </h3>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
//             <h4 className="text-xl font-semibold text-blue-800 mb-2">
//               Predict Failure Risk
//             </h4>
//             <p className="text-gray-600">
//               Detect issues before breakdowns and plan maintenance for high
//               device uptime.
//             </p>
//           </div>
//           <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
//             <h4 className="text-xl font-semibold text-blue-800 mb-2">
//               Automate Care
//             </h4>
//             <p className="text-gray-600">
//               Generate personalized care schedules and reminders with AI.
//             </p>
//           </div>
//           <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
//             <h4 className="text-xl font-semibold text-blue-800 mb-2">
//               Secure Access
//             </h4>
//             <p className="text-gray-600">
//               Data privacy and role-based access for hospitals and clinical
//               teams.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="bg-blue-50 rounded-3xl shadow-xl p-8 md:p-12 my-14 max-w-4xl mx-auto">
//         <h2 className="text-4xl font-bold text-blue-800 text-center mb-8">
//           How it works
//         </h2>
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <img
//             src={featureImg}
//             alt="How It Works"
//             className="w-full md:w-1/3 h-48 object-cover rounded-2xl shadow-lg"
//           />
//           <div className="flex-1">
//             <div className="text-2xl font-bold text-blue-800 mb-4">
//               Simple & Configurable
//             </div>
//             <div className="text-lg text-gray-700 mb-6">
//               Connect devices, monitor status, and set up predictive maintenance
//               with minimal effort.
//               <br />
//               Real-time tracking and automated notifications for your whole team.
//             </div>
//             <div className="flex gap-4">
//               <button className="bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:bg-blue-800 transition-all">
//                 Sign Up
//               </button>
//               <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-xl border-2 border-blue-700 hover:bg-blue-100 transition-all">
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="text-center my-16">
//         <h4 className="text-2xl font-bold text-blue-800 mb-4">
//           Ready to prevent the next failure?
//         </h4>
//         <p className="text-lg text-gray-600 mb-6">
//           Get started with MedPredict and optimize your equipment performance.
//         </p>
//         <div className="flex justify-center gap-4">
//           <button className="bg-blue-700 text-white font-semibold py-3 px-10 rounded-2xl shadow-lg hover:bg-blue-800 transition-all">
//             Sign Up
//           </button>
//           <button className="bg-white text-blue-700 font-semibold py-3 px-10 rounded-2xl border-2 border-blue-700 hover:bg-blue-100 transition-all">
//             Login
//           </button>
//         </div>
//       </section>
//     </main>
//     <Footer />
//   </div>
// );

// export default LandingPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/Footer/Footer";
import heroImg from "../assets/images/hero.jpg";
import featureImg from "../assets/images/feature.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center font-sans">
      <Navbar />
      <main className="container mx-auto flex flex-col gap-11 px-4 pt-16 max-w-5xl">
        <section className="bg-gradient-to-b from-blue-50 to-gray-100 rounded-2xl shadow-xl p-8 md:p-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-4">
            AI-Driven Maintenance for Medical Equipment
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Use predictive maintenance and reliability analytics to keep critical
            devices online. Lower downtime and costs with automated alerts and
            actionable insights.
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <button
              onClick={() => navigate('/signup')}
              className="bg-blue-700 text-white font-semibold py-3 px-10 rounded-xl shadow-md hover:bg-blue-800 transition-all transform hover:-translate-y-1"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-100 text-blue-700 font-semibold py-3 px-10 rounded-xl border-2 border-blue-700 hover:bg-blue-200 transition-all transform hover:-translate-y-1"
            >
              Login
            </button>
          </div>
          <div className="text-gray-500 mt-5 mb-3">
            Trusted by hospitals, clinics & labs
          </div>
          <img
            src={heroImg}
            alt="Medical Equipment Banner"
            className="mt-8 mx-auto max-w-lg w-full rounded-2xl shadow-2xl"
          />
        </section>

        <section className="bg-blue-50 rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">
            Why MedPredict
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
              <h4 className="text-xl font-semibold text-blue-800 mb-2">
                Predict Failure Risk
              </h4>
              <p className="text-gray-600">
                Detect issues before breakdowns and plan maintenance for high
                device uptime.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
              <h4 className="text-xl font-semibold text-blue-800 mb-2">
                Automate Care
              </h4>
              <p className="text-gray-600">
                Generate personalized care schedules and reminders with AI.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
              <h4 className="text-xl font-semibold text-blue-800 mb-2">
                Secure Access
              </h4>
              <p className="text-gray-600">
                Data privacy and role-based access for hospitals and clinical
                teams.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 rounded-3xl shadow-xl p-8 md:p-12 my-14 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-8">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={featureImg}
              alt="How It Works"
              className="w-full md:w-1/3 h-48 object-cover rounded-2xl shadow-lg"
            />
            <div className="flex-1">
              <div className="text-2xl font-bold text-blue-800 mb-4">
                Simple & Configurable
              </div>
              <div className="text-lg text-gray-700 mb-6">
                Connect devices, monitor status, and set up predictive maintenance
                with minimal effort.
                <br />
                Real-time tracking and automated notifications for your whole team.
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('/signup')}
                  className="bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:bg-blue-800 transition-all"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => navigate('/login')}
                  className="bg-white text-blue-700 font-bold py-3 px-8 rounded-xl border-2 border-blue-700 hover:bg-blue-100 transition-all"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center my-16">
          <h4 className="text-2xl font-bold text-blue-800 mb-4">
            Ready to prevent the next failure?
          </h4>
          <p className="text-lg text-gray-600 mb-6">
            Get started with MedPredict and optimize your equipment performance.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/signup')}
              className="bg-blue-700 text-white font-semibold py-3 px-10 rounded-2xl shadow-lg hover:bg-blue-800 transition-all"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate('/login')}
              className="bg-white text-blue-700 font-semibold py-3 px-10 rounded-2xl border-2 border-blue-700 hover:bg-blue-100 transition-all"
            >
              Login
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;

