const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();

const IndexEntry = require('./models/IndexEntry');

// Connect to MongoDB
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log('✅ Connected to MongoDB'))
	.catch((err) => console.error('❌ MongoDB connection error:', err));

// Fetch data from OMDb and save to MongoDB
const fetchAndSeedIndex = async (title) => {
	try {
		const apiKey = process.env.OMDB_API_KEY;
		const url = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

		const response = await axios.get(url);
		const data = response.data;

		if (data.Response === 'False') {
			console.error('❌ Movie not found in OMDb:', data.Error);
			return;
		}

		const newEntry = new IndexEntry({
			// OMDb Data
			title: data.Title,
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

			// Manual Assignments & Custom Metadata
			type: 'film',
			featured: true,
			seen: true,
			conflict: 'World War I',
			conflictSlug: 'wwi',
			commentary: 'A stunning visual take on trench warfare and the loneliness of duty.',
			tags: ['trench warfare', 'WWI', 'long take', 'British Army'],
			historicalFidelity: 'symbolic',
			fidelityNotes:
				'While not based on a true story, 1917 immerses viewers in the emotional and tactical experience of WWI trench warfare.',
			basedOnTrueStory: false,

			// External links
			externalLinks: {
				imdb: `https://www.imdb.com/title/${data.imdbID}`,
				wikipedia: 'https://en.wikipedia.org/wiki/1917_(2019_film)',
				contextLinks: [
					'https://en.wikipedia.org/wiki/World_War_I',
					'https://en.wikipedia.org/wiki/Trench_warfare',
				],
				trailer: 'https://www.youtube.com/watch?v=YqNYrYUiMfg',
			},
		});

		const savedEntry = await newEntry.save();
		console.log('✅ Entry saved to index:', savedEntry.title);
	} catch (error) {
		console.error('❌ Error saving entry to index:', error.message);
	} finally {
		mongoose.disconnect();
	}
};

// Seed a sample film
fetchAndSeedIndex('1917');
