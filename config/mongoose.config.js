const mongoose = require("mongoose")
const databaseName = "humor"

mongoose.connect("mongodb://localhost/" + databaseName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( ()=> {
    console.log("You connect to the " + databaseName + " db" )
}).catch( (err) => {
    console.log("error while connecting to " + databaseName)
})