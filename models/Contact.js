// models/Contact.js

// Importing Mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Defining the contactSchema using the Mongoose Schema constructor
// It represents the structure of the data to be stored in the "Contact" collection
const contactSchema = new mongoose.Schema({
  // Field "name" of type String, which is required (must be provided)
  name: {
    type: String,
    required: true,
  },
  // Field "email" of type String, which is required (must be provided)
  email: {
    type: String,
    required: true,
  },
  // Field "phone" of type String, which is required (must be provided)
  phone: {
    type: String,
    required: true,
  },
  // Field "query" of type String, which is required (must be provided)
  query: {
    type: String,
    required: true,
  },
});

// Creating a Mongoose model called "Contact" using the contactSchema
// This model will represent the "Contact" collection in the database
const Contact = mongoose.model("Contact", contactSchema);

// Exporting the Contact model so that it can be used in other parts of the application
module.exports = Contact;
