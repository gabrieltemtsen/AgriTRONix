import React, { useState } from 'react';

const Deposit = () => {
  const [formData, setFormData] = useState({
    name: '',
    roll_no: '',
    department: '',
    message: '',
    mentor_name: '',
    deposit_amount: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your deposit route
      const response = await fetch('/api/deposit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful deposit confirmation
        // You can also handle blockchain transaction confirmation here
        console.log('Deposit recorded successfully');
      } else {
        // Handle error responses from the server
        console.error('Deposit request failed.');
      }
    } catch (error) {
      console.error('Error while processing deposit:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Deposit Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields here */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {/* Other form fields */}
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
};

export default Deposit;