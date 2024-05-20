const express = require('express');
const db = require('./db'); // Import the database connection
const path = require('path');
const { log } = require('console');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
app.post('/feedback', async function (req, res)  {
  try {
    const  {positive, negative, comment} = req.body; // Assuming you have a JSON request body with name and email fields
   
    // SQL query to insert data into the table (replace with your table name and schema)
    const insertDataSQL = `
      INSERT INTO feedback (positive, negative, comment)
      VALUES (?,?,?)
    `;

    // Query the MySQL server to insert data into the table
    const result = await db.query(insertDataSQL,[positive, negative, comment]);
    
    if (result[0].affectedRows === 1) {
      res.status(200).json({ status : 'ok', message: 'Data inserted successfully' });
      
    } else {
      res.status(500).json({ error: 'Failed to insert data' });
    } 
    
  } catch (error) {
    console.error('Error inserting data into the table:', error);
    res.status(500).json({ error: 'An error occurred while inserting data' });
  }
});



app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, () => {
    console.log("App started");
});