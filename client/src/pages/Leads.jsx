import React, { useState } from 'react';
import './Leads.css';

const Leads = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: 'Arun', email: 'arun@example.com', status: 'Interested' },
    { id: 2, name: 'Devi', email: 'devi@example.com', status: 'Contacted' },
  ]);

  return (
    <div className="leads-container">
      <h2 className="leads-title">Manage Leads</h2>
      <table className="leads-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leads;
