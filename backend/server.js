const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User'); // Import the user model

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/dataauth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const secret = 'your-secret-key'; // Use environment variables in production

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(400).json({ error: 'Email already in use' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error:', error);
    
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 400 || error.response.status === 401) {
        alert(error.response.data.error || "Invalid email or password");
      } else if (error.response.status >= 500) {
        alert("Server error. Please try again later.");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } else if (error.request) {
      // The request was made but no response was received
      alert("Network error. Please check your connection.");
    } else {
      // Something happened in setting up the request that triggered an Error
      alert("An unexpected error occurred.");
    }
  }
  
});


  

// Google authentication endpoint
app.post('/google-login', async (req, res) => {
  const { tokenId } = req.body;

  // Verify tokenId with Firebase Admin SDK
  // Add Firebase Admin SDK verification logic here

  // Extract user details and check if user exists or create a new user
  // Send back JWT token if authentication is successful
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
