const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const genres = require('./seedData');

app.get('/', (req, res) =>{
    res.json(genres)
});

app.get('/:genre', (req, res, next) =>{
    let genre = req.params.genre;
    res.json(genres[genre].title)
});

app.get('/shows/episodes/:genre', (req, res) =>{
    let genre = req.params.genre;
    let showList = [];

    shows.map((show) => {
        if(show.genre == genre){
            showList.push(show)
        }
    });
    res.json(showList);
});





app.listen(port, () =. {
  console.log(`Server is alive on port ${port}`)
});
