const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();

const IndexEntry = require('./models/IndexEntry');

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log('✅ Connected to MongoDB'))
	.catch((err) => console.error('❌ MongoDB connection error:', err));

const fetchAndSeedIndex = async (title) => {
	try {
		const apiKey = process.env.OMDB_API_KEY;
		const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

		const response = await axios.get(url);
		const data = response.data;

		if (data.Response === 'False') {
			console.error('❌ Movie not found in OMDb:', data.Error);
			return;
		}

		const newEntry = new IndexEntry({
			title: data.Title,
			year: data.Year,
			rated: data.Rated,
			released: data.Released,
			runtime: data.Runtime,
			genre: data.Genre?.split(',').map((g) => g.trim()),
			director: data.Director,
			writer: data.Writer,
			actors: data.Actors,
			plot: data.Plot,
			language: data.Language,
			country: data.Country,
			poster: data.Poster,
			imdbID: data.imdbID,

			// Curated fields
			conflict: 'WWII',
			commentary: 'A stunning visual take on trench warfare and the loneliness of duty.',
			tags: ['trench warfare', 'WWI', 'long take'],
		});

		const savedEntry = await newEntry.save();
		console.log('✅ Entry saved to index:', savedEntry.title);
	} catch (error) {
		console.error('❌ Error saving entry to index:', error.message);
	} finally {
		mongoose.disconnect();
	}
};

// Example seed call
fetchAndSeedIndex('1917');
