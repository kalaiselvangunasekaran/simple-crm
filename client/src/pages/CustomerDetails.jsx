import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CustomerDetails.css'; // (create this CSS file too)

const CustomerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Placeholder data (you'll replace this with real API data later)
  const customer = {
    name: 'Kalai Selvan',
    email: 'kalai@example.com',
    phone: '(123) 456-7890',
    address: '123 Main St, Chennai',
    company: 'Simple CRM Pvt Ltd',
  };

  return (
    <div className="customer-details-container">
      <h2>Customer Details</h2>
      <div className="customer-card">
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>
        <p><strong>Address:</strong> {customer.address}</p>
        <p><strong>Company:</strong> {customer.company}</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default CustomerDetails;
