import React from 'react';
import { useAuth } from '../hooks/useAuth';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
      <p className="mt-2 text-text-secondary">
        Welcome back, {user?.firstName} {user?.lastName}!
      </p>
      <div className="mt-6 p-4 border rounded-md">
        <h2 className="text-xl font-semibold">Your Information</h2>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Organization:</strong> {user?.organization}</p>
      </div>
    </div>
  );
};

export default DashboardPage;