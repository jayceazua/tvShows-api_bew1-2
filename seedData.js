//hardcoded response

const shows = [
   {
       id: 1,
       title: "Mr. Robot",
       genre: 1,
       genreTitle: "technology drama",
       episodes: [
           "pilot",
           "hackathon"
       ]
   },
   {
       id: 2,
       title: "Marco Polo",
       genre: 2,
       genreTitle: "Romance",
       episodes: [
           "pilot",
           "khan"
       ]
   },
   {
       id: 3,
       title: "Shameless",
       genre: 1,
       genreTitle: "drama",
       episodes: [
           "pilot",
           "some shit"
       ]
   },
   {
       id: 4,
       title: "Dead after Dawn",
       genre: 3,
       genreTitle: "Horror",
       episodes: [
           "pilot",
           "ricklantis"
       ]
   },
   {
       id: 5,
       title: "Gotham",
       genre: 0,
       genreTitle: "Action",
       episodes: [
           "pilot",
           "arkham"
       ]
   }
]




getEpisodes = (showID) => {
    return new Promise((resolve, reject) => {
        episodes = [];
        for (let i = 0; i < shows.length; i++) {
            if (shows[i]._id == showID) {
                episodes = shows[i].episodes;
                break;
            }
        }
        if (episodes.length > 0) {
            resolve(episodes);
        } else {
            reject('no episodes');
        }
    });
}

module.exports = {
    getEpisodes
}
