import React from 'react';
import { Link } from 'react-router-dom';

const OrderManagementSystem = () => {
  return (
    <div>
      <h1>Order Management System</h1>
      <Link to="/order-details">
        <button>View Order</button>
      </Link>
    </div>
  );
};

export default OrderManagementSystem;
