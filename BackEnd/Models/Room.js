const mongoose = require("mongoose");

// Define the schema for your form data
const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String, // You can store the image path as a string or use GridFS for storing images.
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

// Create a Room model using the schema
const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
