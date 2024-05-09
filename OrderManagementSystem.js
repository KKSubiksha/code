import React, { useState } from 'react';
import './OrderManagementSystem.css'; 

const OrderManagementSystem = () => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [orders, setOrders] = useState([
    {
      Awb_no: "6635f705358661cd37bb69b6",
      order_id: "987656",
      customer_id: "125",
      products: [
        { product_id: "021", name: "Product U", quantity: 3, price: 8.75 },
        { product_id: "022", name: "Product V", quantity: 2, price: 17.99 }
      ],
      order_date: "05.04.2024",
      total_amount: 54.47,
      status: "shipped"
    },
    {
      Awb_no: "6635f705358661cd37bb69b7",
      order_id: "987657",
      customer_id: "126",
      products: [
        { product_id: "023", name: "Product W", quantity: 1, price: 12.50 },
      ],
      order_date: "05.05.2024",
      total_amount: 62.35,
      status: "pending"
    },
    {
      Awb_no: "6635f705358661cd37bb69b8",
      order_id: "987658",
      customer_id: "127",
      products: [
        { product_id: "025", name: "Product Y", quantity: 2, price: 14.99 },
        { product_id: "026", name: "Product Z", quantity: 3, price: 11.25 }
      ],
      order_date: "25.04.2024",
      total_amount: 78.92,
      status: "delivered"
    }
  ]);

  const handleViewOrder = () => {
    setShowOrderDetails(true);
  };

  const handleAddOrder = () => {
    console.log('Adding a new order...');
  };

  return (
    <div className="container">
      <h1 className="heading">ORDER MANAGEMENT SYSTEM</h1>
      <h2>Welcome to Order Management System</h2>
      <div className="button-container">
        <button className="action-button" onClick={handleViewOrder}>View Order</button>
        <button className="action-button" onClick={handleAddOrder}>Add Order</button>
      </div>

      {showOrderDetails && (
        <div>
          <h2>Order Details</h2>
          <table className="order-table">
            <thead>
              <tr>
                <th className="header">AWB_NO</th>
                <th className="header">ORDER_ID</th>
                <th className="header">CUSTOMER_ID</th>
                <th className="header">PRODUCTS</th>
                <th className="header">ORDER_DATE</th>
                <th className="header">TOTAL_AMOUNT</th>
                <th className="header">STATUS</th>
                <th className="header">OTHER_OPTIONS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.Awb_no}</td>
                  <td>{order.order_id}</td>
                  <td>{order.customer_id}</td>
                  <td>
                    <ul>
                      {order.products.map((product, index) => (
                        <li key={index}>
                          <strong>Product ID:</strong> {product.product_id}<br />
                          <strong>Name:</strong> {product.name}<br />
                          <strong>Quantity:</strong> {product.quantity}<br />
                          <strong>Price:</strong> {product.price}<br />
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>{order.order_date}</td>
                  <td>{order.total_amount}</td>
                  <td>{order.status}</td>
                  <td>
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderManagementSystem;
