import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to Simple CRM Dashboard</h1>
      <div className="dashboard-cards">
        <Link to="/customers" className="dashboard-card">
          <h3>Manage Customers</h3>
          <p>View, add, or edit customers</p>
        </Link>
        <Link to="/customers/add" className="dashboard-card">
          <h3>Add Customer</h3>
          <p>Add a new customer record</p>
        </Link>
        <Link to="/leads" className="dashboard-card">
          <h3>Manage Leads</h3>
          <p>Track and update leads</p>
        </Link>
        <Link to="/settings" className="dashboard-card">
          <h3>Settings</h3>
          <p>Customize your CRM</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
