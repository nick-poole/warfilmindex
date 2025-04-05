const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();

const IndexEntry = require('../models/IndexEntry');

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log('✅ Connected to MongoDB'))
	.catch((err) => console.error('❌ MongoDB connection error:', err));

const fetchAndSeedIndex = async (title, customFields = {}) => {
	try {
		const apiKey = process.env.OMDB_API_KEY;
		const url = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

		const response = await axios.get(url);
		const data = response.data;

		if (data.Response === 'False') {
			console.error(`❌ OMDb Error for "${title}":`, data.Error);
			return;
		}

		const newEntry = new IndexEntry({
			title: data.Title,
			imdbID: data.imdbID,
			year: data.Year,
			rated: data.Rated,
			runtime: data.Runtime,
			genre: data.Genre?.split(',').map((g) => g.trim()),
			director: data.Director,
			writer: data.Writer,
			actors: data.Actors,
			plot: data.Plot,
			language: data.Language,
			country: data.Country,
			poster: data.Poster,

			type: 'film',
			featured: false,
			seen: true,
			conflict: 'Unknown',
			conflictSlug: 'unknown',
			tags: [],
			commentary: '',
			historicalFidelity: 'unknown',
			fidelityNotes: '',
			basedOnTrueStory: false,

			externalLinks: {
				imdb: `https://www.imdb.com/title/${data.imdbID}`,
				wikipedia: '',
				contextLinks: [],
				trailer: '',
			},

			...customFields,
		});

		const saved = await newEntry.save();
		console.log(`✅ Seeded: ${saved.title}`);
	} catch (error) {
		console.error(`❌ Error with "${title}":`, error.message);
	}
};

const films = [
	{
		title: 'The Hurt Locker',
		customFields: {
			conflict: 'Iraq War',
			conflictSlug: 'iraq-war',
			commentary: 'A tense character study on the addiction to war and the chaos of IED disposal units.',
			tags: ['bomb squad', 'urban combat', 'asymmetrical warfare'],
			historicalFidelity: 'medium',
			fidelityNotes: 'Not based on a true story but reflects real combat scenarios in Iraq.',
			basedOnTrueStory: false,
		},
	},
	{
		title: 'The Thin Red Line',
		customFields: {
			conflict: 'World War II',
			conflictSlug: 'wwii',
			commentary: 'A deeply philosophical and haunting portrayal of the Battle of Guadalcanal.',
			tags: ['Guadalcanal', 'existentialism', 'pacific theater'],
			historicalFidelity: 'medium',
			fidelityNotes: 'Loosely adapted from James Jones’ novel based on his own experience.',
			basedOnTrueStory: true,
		},
	},
	{
		title: 'Devotion',
		customFields: {
			conflict: 'Korean War',
			conflictSlug: 'korean-war',
			commentary: 'The powerful true story of Jesse Brown, the first Black U.S. Navy aviator.',
			tags: ['aerial combat', 'Korean War', 'racism', 'biographical'],
			historicalFidelity: 'high',
			fidelityNotes: 'Based on real events and the book by Adam Makos.',
			basedOnTrueStory: true,
		},
	},
];

const runBatch = async () => {
	for (const film of films) {
		await fetchAndSeedIndex(film.title, film.customFields);
	}
	mongoose.disconnect();
};

runBatch();
