const express = require('express');
const router = express.Router();

const pool = require('../db'); // Adjust the path as needed
router.post('/deposit', async (req, res) => {
    try {
      // Extract deposit data from the request body
      const { name, roll_no, department, message, mentor_name, deposit_amount } = req.body;
  
      // Define the SQL query to insert deposit data into the database
      const query = `
        INSERT INTO deposits (name, roll_no, department, message, mentor_name, deposit_amount)
        VALUES ($1, $2, $3, $4, $5, $6)
      `;
  
      // Execute the SQL query with the data
      await pool.query(query, [name, roll_no, department, message, mentor_name, deposit_amount]);
  
      // Respond with a success message
      res.status(201).json({ message: 'Deposit recorded successfully' });
    } catch (error) {
      console.error('Error while inserting deposit:', error);
      res.status(500).json({ error: 'An error occurred while processing your request' });
    }
  });
  module.exports = router;