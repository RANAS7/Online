const Room = require("../BackEnd/Models/Room");
const User = require("../BackEnd/Models/User");
const Contact = require("../BackEnd/Models/Contact"); // Corrected import name
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5713;

// Connect to your MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/UserData", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// CORS
app.use(cors());
// Middleware to parse JSON
app.use(bodyParser.json());
app.use(morgan("dev"));

app.post("/signUp", async (req, res) => {
  const userData = req.body;

  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email: userData.email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    // If the user doesn't exist, create a new user document using the User model
    const newUser = new User(userData);
    await newUser.save();

    console.log("Saved to the database...");

    res
      .status(200)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    // Find the user by email
    const user = await User.findOne({ email });

    console.log(user);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Check if the provided password matches the stored password (without hashing)
    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error during login" });
  }
});

// Define your API routes here
// Example route for creating a new room
app.post("/addRoom", async (req, res) => {
  try {
    // Create a new Room document from the request data
    const newRoom = new Room({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image, // You may need to store the image URL or file path
    });

    // Save the new Room document to the database
    await newRoom.save();

    // Respond with a success message or the new room data
    res.status(201).json({ message: "Room added successfully", room: newRoom });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/getRooms", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: "Error creating contact" });
  }
};

// Retrieve all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving contacts" });
  }
};

module.exports = {
  createContact,
  getAllContacts,
};

// Start your Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
