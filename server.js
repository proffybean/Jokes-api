const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

require('./config/mongoose.config')

const jokeRoutes = require('./routes/jokes.route')
jokeRoutes(app)

app.listen(8000, ()=>{console.log("server started... port 8000") })