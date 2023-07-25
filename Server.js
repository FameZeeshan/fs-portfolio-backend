// server.js

// Importing required libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Contact = require("./models/Contact"); // Import the Contact model
require("dotenv").config(); // Load environment variables from .env file

// Creating an instance of Express application
const app = express();
const PORT = process.env.PORT || 5000; // Set the port number for the server

// Adding middleware for parsing incoming request bodies as JSON
app.use(bodyParser.json());

// Adding middleware for handling Cross-Origin Resource Sharing (CORS)
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

// Define the route to handle the form submission
app.post("/submit-form", (req, res) => {
  // Extracting data from the request body
  const { name, email, phone, query } = req.body;

  // Create a new Contact document using the Contact model and the extracted data
  const newContact = new Contact({ name, email, phone, query });

  // Save the new Contact document to the database
  newContact
    .save()
    .then(() => {
      // If the document is successfully saved, send a JSON response with success message
      res.status(200).json({ message: "Query submitted successfully" });
    })
    .catch((err) => {
      // If there is an error in saving the document, log the error and send a JSON response with error message
      console.log(err);
      res.status(500).json({ error: "Failed to submit query" });
    });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
