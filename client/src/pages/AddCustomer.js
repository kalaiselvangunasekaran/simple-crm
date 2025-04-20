import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddCustomer.css';

const AddCustomer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Customer:', { name, email, phone });
    navigate('/customers');
  };

  return (
    <div className="add-customer-container">
      <div className="add-customer-box">
        <h2>Add New Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-btn">Add Customer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
