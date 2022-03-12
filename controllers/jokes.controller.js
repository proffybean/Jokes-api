const JokeModel = require('../models/jokes.model')

module.exports.getAllJokes = (req,res) => {
    console.log('inside getAllJokes')

    JokeModel.find({})
        .then( (jokeObj) => {
            console.log(jokeObj)
            return res.json(jokeObj)
        }).catch( (err) => {
            console.log(`err: ${err}`)
            return res.json(err)
        })
}

module.exports.getJokesById = (req,res) => {
    console.log('inside getAllJokes')

    JokeModel.find({_id:req.params._id})
        .then( (jokeObj) => {
            console.log(jokeObj)
            return res.json(jokeObj)
        }).catch( (err) => {
            console.log(`err: ${err}`)
            return res.status(500).send(err)
        })
}

module.exports.updateJokeById = (req,res) => {
    console.log('inside updateJokesById')
    console.log('body: ' + req.body.setup)
    console.log('body: ' + req.body.punchline)

    JokeModel.updateOne({_id:req.params._id}, 
        {$set:{punchline:req.body.punchline, setup:req.body.setup}})
        .then( (jokeObj) => {
            console.log(jokeObj)
            return res.json(jokeObj)
        }).catch( (err) => {
            console.log(`err: ${err}`)
            return res.status(500).send(err)
        })
}

module.exports.createJoke = (req,res) => {
    console.log('inside createJoke')

    JokeModel.create(req.body)
        .then( (jokeObj) => {
            console.log('Great Success! Joke written')
            return res.json(jokeObj)
        })
        .catch( (err) => {
            console.log(`error: ${err}`)
            return res.status(500).send(err)
        })
}

module.exports.ping = (req,res) => {
    return res.json({message:"Hello!"})
}

// delete joke
module.exports.deleteJoke = (req,res) => {
    console.log('inside deleteJoke')
    //console.log(req)
    console.log(req.params)

    JokeModel.deleteOne({_id:req.params.jokeId})
        .then( deletedJoke => {
            console.log('Great Success! Joke deleted')
            console.log(deletedJoke)
            return res.json(deletedJoke)
        })
        .catch( (err) => {
            console.log(`error: ${err}`)
            return res.status(500).send(err)
        })
}