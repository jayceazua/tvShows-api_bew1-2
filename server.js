const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// SHOWS
const showsRouter = require('./controllers/shows');
app.use('/shows', showsRouter);


// EPISODES
app.get('/shows/:id/episodes/', (req, res) => {

});

app.get('/shows/:id/episodes/:id', (req, res) => {

});








app.listen(port, () => {
  console.log(`Server is alive on port ${port}`)
});
