import React from 'react';
import { Link } from 'react-router-dom';

const Customers = () => {
  return (
    <div>
      <h2>Customers List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example data - you can replace with dynamic data later */}
          <tr>
            <td>Selvan</td>
            <td>Selvan@example.com</td>
            <td>(123) 456-7890</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Kalai</td>
            <td>Kalai@example.com</td>
            <td>(987) 654-3210</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/add-customer">
        <button>Add New Customer</button>
      </Link>
    </div>
  );
}

export default Customers;
