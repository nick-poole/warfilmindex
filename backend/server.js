// Load environment variables
require('dotenv').config();

// Import modules
const express = require('express');
const mongoose = require('mongoose');

// Create Express app and choose port
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON data in request bodies
app.use(express.json());

// Import route for /film
const filmRoutes = require('./routes/film');

// Use film routes
app.use(filmRoutes);

// Connect to MongoDB Atlas using Mongoose
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log('✅ Connected to MongoDB Atlas'))
	.catch((err) => console.error('❌ MongoDB connection error:', err));

// Base route for testing if server is working
app.get('/', (req, res) => {
	res.send('War Film Index backend is operational.');
});

// Start the server and listen on defined port
app.listen(PORT, () => {
	console.log(`Server is live on port ${PORT}`);
});
