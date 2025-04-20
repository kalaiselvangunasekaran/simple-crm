import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditCustomer.css'; // Create this CSS file

const EditCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // In real app, fetch customer data using the ID
  useEffect(() => {
    // Dummy data for now
    const customer = {
      name: 'Kalai Selvan',
      email: 'kalai@example.com',
      phone: '(123) 456-7890',
    };
    setName(customer.name);
    setEmail(customer.email);
    setPhone(customer.phone);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Customer:', { id, name, email, phone });
    navigate('/customers');
  };

  return (
    <div className="edit-customer-container">
      <h2>Edit Customer</h2>
      <form onSubmit={handleSubmit} className="edit-customer-form">
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <button type="submit">Update Customer</button>
      </form>
    </div>
  );
};

export default EditCustomer;
