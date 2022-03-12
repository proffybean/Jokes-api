const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup: {
        type:String
    },
    punchline: {
        type:String
    }
}, {timestamps: true})

const JokeModel = mongoose.model("Joke", JokeSchema);

module.exports = JokeModel;