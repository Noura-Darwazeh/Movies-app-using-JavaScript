const fetch = require('node-fetch');
const fs = require('fs');

// Define the URL of the OMDB API and your API key
const apiUrl = 'http://www.omdbapi.com/';
const apiKey = 'your-api-key';
const movieTitle = 'your-movie-title';

// Make a GET request to the API to fetch movie data
fetch(`${apiUrl}?apikey=${apiKey}&s=${movieTitle}`)
  .then(response => response.json())
  .then(data => {
    // Process the retrieved movie data
    const movies = data.Search;
    // Save the movie data to a JSON file
    saveToJsonFile(movies);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Function to save movie data to a JSON file
function saveToJsonFile(data) {
  // Convert the movie data to JSON string
  const jsonData = JSON.stringify(data);

  // Write the JSON data to a file
  fs.writeFile('movies.json', jsonData, 'utf8', err => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('Movies data saved to movies.json');
    }
  });
}
