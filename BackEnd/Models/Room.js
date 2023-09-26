// room.js
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
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
  image: {
    data: Buffer,
    contentType: String, // Assuming you store the image URL
  },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
