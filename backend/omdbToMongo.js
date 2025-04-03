const axios = require('axios');
//for connecting to DB and inserting data
const mongoose = require('mongoose');
//loads .env to get API key
require('dotenv').config();

//for creating new entries in the DB
const Movie = require('./models/Movie');

//connects to cluster0 using secret key
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log('✅ Connected to MongoDB'))
	.catch((err) => console.error('❌ MongoDB connection error:', err));

//
const fetchAndSaveMovie = async (title) => {
	try {
		const apiKey = process.env.OMDB_API_KEY;
		const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

		const response = await axios.get(url);
		const data = response.data;

		if (data.Response === 'False') {
			console.error('❌ Movie not found in OMDb:', data.Error);
			return;
		}

		const newMovie = new Movie({
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

			// Custom fields
			conflict: 'WWII',
			commentary: 'A stunning visual take on trench warfare and the loneliness of duty.',
			tags: ['trench warfare', 'WWI', 'long take'],
		});

		const savedMovie = await newMovie.save();
		console.log('✅ Movie saved:', savedMovie.title);
	} catch (error) {
		console.error('❌ Error saving movie:', error.message);
	} finally {
		mongoose.disconnect();
	}
};

fetchAndSaveMovie('1917');
