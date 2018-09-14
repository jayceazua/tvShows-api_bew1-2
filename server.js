const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const shows = [
   {
       id: "1",
       title: "Mr. Robot",
       genre: "1",
       genreTitle: "technology drama",
       episodes: [
           "pilot",
           "hackathon"
       ]
   },
   {
     id: "2",
     title: "Rick and Morty",
     genre: "2",
     genreTitle: "comedy",
     episodes: [
       "pilot",
       "morty dies"
     ]
   }
 ]


app.get('/', (req, res) =>{
    res.json(shows)
});

app.get('/:id', (req, res, next) =>{
    let _id = req.params.id;
    for (var i = 0; i < shows.length; i++) {
      if (_id === shows[i].id) {
        res.json(shows[i])
      }

    }
});






app.listen(port, () => {
  console.log(`Server is alive on port ${port}`)
});
