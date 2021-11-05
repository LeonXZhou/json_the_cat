const request = require('request');
const catBreedSearch = 'https://api.thecatapi.com/v1/breeds/search';
const fetchBreedDescription = function(breedName, callback) {
  request(catBreedSearch + `?q=${breedName}`, (error, response, body) => {
    if (error === null && body !== '[]') {
      callback(null,JSON.parse(body)[0].description);
    }
    if (body === '[]') {
      callback('cat breed not found',null);
    }
  });
};

module.exports = { fetchBreedDescription };



// if (body === '[]') {
//   console.log('cat breed not found');
// }
// if (error) {
//   console.log('error:', error);
// }
// if (!(body === '[]') && !error) {
//   const data = JSON.parse(body);
//   console.log(data[0].description);
// }