const jokeController = require('../controllers/jokes.controller')

module.exports = (app) => {
    app.get('/api/jokes', jokeController.getAllJokes)

    app.get('/api/jokes/:_id', jokeController.getJokesById)

    app.post('/api/jokes', jokeController.createJoke)

    app.put('/api/jokes/:_id', jokeController.updateJokeById)

    app.delete('/api/jokes/:jokeId', jokeController.deleteJoke)

    app.get('/', jokeController.ping)
}