const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/movies_db")
    .then(() => {
        console.log("db is connected...........!");
    })
    .catch((err) => {
        console.log("db is not connected.........!", err);
    })