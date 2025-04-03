const axios = require('axios');
require('dotenv').config();

const getMovieData = async (title) => {
	try {
		const apiKey = process.env.OMDB_API_KEY;
		const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

		const response = await axios.get(url);
		console.log('Requesting:', url);
		console.log(response.data);
	} catch (error) {
		console.error('Failed to fetch movie data:', error.message);
	}
};
getMovieData('1917');
