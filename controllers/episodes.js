const episodes = require('express').Router();
const shows = require('../seedData');

episodes.get('/', (req, res, next) => {
  let _id = req.showsId;
  for (let i = 0; i < shows.length; i++) {
    if (_id === shows[i].id) {
      res.json(shows[i].episodes)
    }
  }
});


episodes.get('/:id', (req, res, next) => {
  let _id = req.showsId;
  for (let i = 0; i < shows.length; i++) {
    if (_id === shows[i].id) {
      res.json(shows[i].episodes[req.params.id])
    }
  }
});



module.exports = episodes;
