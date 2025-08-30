import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { Logo } from '../components/icons/Icons';

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
            <Logo className="h-16 w-16 text-primary mb-4" />
            <h1 className="text-5xl font-extrabold text-text-primary">
                Welcome to MedPredict Portal
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl">
                Access your dashboard to monitor equipment reliability, set up alerts, and gain insights from predictive models.
            </p>
            <div className="mt-8 flex gap-4">
                <Link to="/login">
                    <Button variant="primary">Login</Button>
                </Link>
                <Link to="/signup">
                    <Button variant="secondary">Sign Up</Button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;