const express = require('express');
const axios = require('axios');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));

// Route to retrieve images from Unsplash API and render the index page with images
app.get('/', async (req, res) => {
  const accessKey = 'oQhIsVTb4qn99UUqkqfsGZr27yoyyxHUpDpNnPobK9w';
  const url = `https://api.unsplash.com/photos/random?count=16&client_id=${accessKey}`;

  try {
    const response = await axios.get(url);
    const images = response.data;
    res.render('index', { images });
  } catch (error) {
    console.error(error);
    res.send('Error retrieving images');
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));