const episodes = require('express').Router();
const shows = require('../seedData');

episodes.get('/', function(req, res, next) {
  let _id = req.showsId;
  for (var i = 0; i < shows.length; i++) {
    if (_id === shows[i].id) {
      res.json(shows[i].episodes)
    }
  }
});


episodes.get('/:id', function(req, res, next) {
  let _id = req.showsId;
  for (var i = 0; i < shows.length; i++) {
    if (_id === shows[i].id) {
      res.json(shows[i].episodes[req.params.id])
    }
  }
});



module.exports = episodes;
