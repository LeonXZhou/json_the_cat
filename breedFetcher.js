const request = require('request');
const fs = require('fs')
const args = process.argv.slice(2);
const catBreedSearch = 'https://api.thecatapi.com/v1/breeds/search'
request(catBreedSearch + `?q=${args[0]}`, (error, response, body) => {
  if (body === '[]') {
    console.log('cat breed not found');
  }
  if (error) {
    console.log('error:', error);
  }
  if (!(body === '[]') && !error) {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});


