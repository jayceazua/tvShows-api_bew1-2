//hardcoded response

const shows = [
   {
       id: 1,
       title: "Gone With The Wind",
       genre: 1,
       genreTitle: "Romance",
       episodes: [
           "pilot",
           "ricklantis"
       ]
   },
   {
       id: 2,
       title: "He Won my Heart",
       genre: 2,
       genreTitle: "Romance",
       episodes: [
           "pilot",
           "ricklantis"
       ]
   },
   {
       id: 3,
       title: "Zombie High School",
       genre: 1,
       genreTitle: "Horror",
       episodes: [
           "pilot",
           "ricklantis"
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
       title: "Superman",
       genre: 0,
       genreTitle: "Action",
       episodes: [
           "pilot",
           "ricklantis"
       ]
   },
   {
       id: 6,
       title: "Wonder Woman",
       genre: 1,
       genreTitle: "Action",
       episodes: [
           "pilot",
           "ricklantis"
       ]
   },
   {
       id: 7,
       title: "Jokes on You",
       genre: 3,
       genreTitle: "Comedy",
       episodes: [
           "pilot",
           "ricklantis"
       ]
   },
   {
       id: 8,
       title: "Sally Met Harry",
       genre: 1,
       genreTitle: "Comedy",
       episodes: [
           "pilot",
           "ricklantis"
       ]
   },
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
