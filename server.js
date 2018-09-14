const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// SHOWS
const showsRouter = require('./controllers/shows');
app.use('/shows', showsRouter);

app.listen(port, () => {
  console.log(`Server is alive on port ${port}`)
});
