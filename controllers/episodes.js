const episodesRouter = require('express').Router();
const shows = require('../seedData');
// The root router for requests to our tracks path
track.get('/', function(req, res, next) {
  let showsId = req.params.id; // Our problem line

  // retrieve album's track data and render track list page
});

// The route for handling a request to a specific track
track.get('/:id', function(req, res, next) {
  let showsId = req.params.id; // <-- How do we get this?
  let episodesId = req.params.id;

  // retrieve individual track data and render on single track page
});



module.exports = episodesRouter;
