const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("db is connected...........!");
    })
    .catch((err) => {
        console.log("db is not connected.........!", err);
    })