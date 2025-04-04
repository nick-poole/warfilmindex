const express = require('express');
const router = express.Router();

// Import internal archive model
const IndexEntry = require('../models/IndexEntry');

// Route to get all films from the index
router.get('/film', async (req, res) => {
	try {
		const archive = await IndexEntry.find();
		res.json(archive);
	} catch (error) {
		console.error('❌ Error fetching films from index:', error.message);
		res.status(500).json({ error: 'Server Error' });
	}
});

module.exports = router;
