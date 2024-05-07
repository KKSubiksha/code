import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [order, setOrder] = useState({
    orderId: '',
    customerName: '',
    orderDate: '',
    itemsOrdered: [{ itemId: '', itemName: '', quantity: 0, price: 0 }],
    totalAmount: 0,
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/orders', order);
      alert('Order added successfully!');
    } catch (error) {
      console.error('Error adding order:', error);
      alert('Error adding order. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add New Order</h2>
      <form onSubmit={handleSubmit}>
        <label>Order ID:</label>
        <input type="text" name="orderId" value={order.orderId} onChange={handleChange} />
        {/* Add other input fields for customerName, orderDate, itemsOrdered, totalAmount, status */}
        <button type="Add">Submit</button>
      </form>
    </div>
  );
};

export default OrderForm;
