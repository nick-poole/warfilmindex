// Import Mongoose library for defining MongoDB schemas and models
const mongoose = require('mongoose');

// Define the schema for a Movie document in the database
const movieSchema = new mongoose.Schema(
	{
		// Core metadata
		title: { type: String, required: true },
		year: String,
		rated: String,

		// Creative credits
		director: String,
		writer: String,
		actors: String,

		// Description and classification
		genre: [String],
		plot: String,
		language: String,
		country: String,

		// Visual & external identifiers
		poster: String,
		imdbID: { type: String, unique: true },

		// Custom fields
		conflict: String, // i.e., "WWII", "Vietnam", etc.
		commentary: String,
		tags: [String],
	},
	{
		timestamps: true,
	}
);

// Export the Movie model based on the schema
module.exports = mongoose.model('Movie', movieSchema);
