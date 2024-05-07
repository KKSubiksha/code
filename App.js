import React, { useState } from 'react';
import './OrderManagementSystem.css'; // Importing CSS file for styling

const OrderManagementSystem = () => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  
  // Define state for orders
  const [orders, setOrders] = useState([
    {
      orderId: 987672,
      awbNo: 123456,
      productName: 'Object',
      shipper: 'FEDEX',
      orderDate: '03.05.2024',
      amount: 101.97,
      status: 'shipped'
    },
    // Add more orders here
    {
      orderId: 987673,
      awbNo: 123457,
      productName: 'Object 2',
      shipper: 'UPS',
      orderDate: '04.05.2024',
      amount: 85.50,
      status: 'pending'
    },
    {
      orderId: 987674,
      awbNo: 123458,
      productName: 'Object 3',
      shipper: 'DHL',
      orderDate: '05.05.2024',
      amount: 120.75,
      status: 'shipped'
    },
    {
      orderId: 987675,
      awbNo: 123459,
      productName: 'Object 4',
      shipper: 'USPS',
      orderDate: '06.05.2024',
      amount: 175.20,
      status: 'delivered'
    },
    // Add 6 more orders
    {
      orderId: 987676,
      awbNo: 123460,
      productName: 'Object 5',
      shipper: 'UPS',
      orderDate: '07.05.2024',
      amount: 95.25,
      status: 'pending'
    },
    {
      orderId: 987677,
      awbNo: 123461,
      productName: 'Object 6',
      shipper: 'DHL',
      orderDate: '08.05.2024',
      amount: 110.50,
      status: 'shipped'
    },
    {
      orderId: 987678,
      awbNo: 123462,
      productName: 'Object 7',
      shipper: 'FEDEX',
      orderDate: '09.05.2024',
      amount: 145.75,
      status: 'delivered'
    },
    {
      orderId: 987679,
      awbNo: 123463,
      productName: 'Object 8',
      shipper: 'USPS',
      orderDate: '10.05.2024',
      amount: 210.80,
      status: 'pending'
    },
    {
      orderId: 987680,
      awbNo: 123464,
      productName: 'Object 9',
      shipper: 'DHL',
      orderDate: '11.05.2024',
      amount: 185.30,
      status: 'shipped'
    },
    {
      orderId: 987681,
      awbNo: 123465,
      productName: 'Object 10',
      shipper: 'UPS',
      orderDate: '12.05.2024',
      amount: 150.45,
      status: 'delivered'
    }
  ]);

  const handleViewOrder = () => {
    setShowOrderDetails(true);
  };

  const handleAddOrder = () => {
    // Add your logic to add a new order here
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
                <th className="header">ORDER_ID</th>
                <th className="header">AWB_NO</th>
                <th className="header">PRODUCT_NAME</th>
                <th className="header">SHIPPER</th>
                <th className="header">ORDER_DATE</th>
                <th className="header">AMOUNT</th>
                <th className="header">STATUS</th>
                <th className="header">OTHER_OPTIONS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.awbNo}</td>
                  <td>{order.productName}</td>
                  <td>{order.shipper}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.amount}</td>
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
