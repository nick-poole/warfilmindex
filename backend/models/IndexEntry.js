// Import Mongoose library for defining MongoDB schemas and models
const mongoose = require('mongoose');

// Define the schema for an indexed war film in the archive
const indexSchema = new mongoose.Schema(
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

		// Curated by WFI
		conflict: String, // e.g., "WWII", "Vietnam", etc.
		commentary: String, // Your personal/educational analysis
		tags: [String], // Thematic or contextual tags
	},
	{
		timestamps: true, // Adds createdAt and updatedAt fields
	}
);

// Export the IndexEntry model for use in the archive backend
module.exports = mongoose.model('IndexEntry', indexSchema);
