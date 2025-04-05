const mongoose = require('mongoose');

const indexEntrySchema = new mongoose.Schema(
	{
		// Core Metadata
		title: { type: String, required: true },
		year: String,
		rated: String,
		runtime: String,
		genre: [String],
		language: String,
		country: String,
		type: String, // "film" | "miniseries" | "tv" | "documentary" | "short"
		episodes: Number, // Optional, for miniseries or shows

		// Credits
		director: String,
		writer: String,
		actors: String,

		// Description & Commentary
		plot: String,
		commentary: String, // Displayed as "Index Insight" on frontend
		featured: Boolean,
		seen: Boolean,

		// Conflict
		conflict: String, // e.g., "WWII"
		conflictSlug: String, // e.g., "wwii"

		// Tags & Fidelity
		tags: [String],
		historicalFidelity: String, // e.g., "high", "symbolic", "fictionalized"
		fidelityNotes: String,
		basedOnTrueStory: Boolean,

		// External Links
		externalLinks: {
			imdb: String,
			wikipedia: String,
			contextLinks: [String],
			trailer: String,
		},

		// Visual
		poster: String,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('IndexEntry', indexEntrySchema);
