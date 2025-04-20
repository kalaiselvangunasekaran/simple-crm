import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import AddCustomer from './pages/AddCustomer';
import EditCustomer from './pages/EditCustomer';
import CustomerDetails from './pages/CustomerDetails';
import Leads from './pages/Leads';  // Added Leads page
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Customers */}
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/add" element={<AddCustomer />} />
      <Route path="/customers/edit/:id" element={<EditCustomer />} />
      <Route path="/customers/view/:id" element={<CustomerDetails />} />

      {/* Leads */}
      <Route path="/leads" element={<Leads />} /> {/* New Leads Route */}

      {/* 404 Not Found Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
