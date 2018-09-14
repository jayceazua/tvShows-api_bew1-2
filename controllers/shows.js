const showsRouter = require('express').Router();

const shows = require('../seedData');

showsRouter.get('/', (req, res) =>{
    res.json(shows)
});


showsRouter.get('/:id', (req, res) =>{
    let _id = req.params.id;
    for (var i = 0; i < shows.length; i++) {
      if (_id === shows[i].id) {
        res.json(shows[i])
      }
    }
});

const episodes = require('./episodes');
showsRouter.use('/:id/episodes', (req, res, next) => {
  req.showsId = req.params.id;
  next();
}, episodes);

module.exports = showsRouter
