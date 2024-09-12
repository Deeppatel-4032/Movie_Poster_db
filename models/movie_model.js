const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    path : {
        type : String
    },
    releaseDate : {
        type : Date,
        default : Date.new
    },
    rating : {
        type : Number,
        required : true
    },
    genre : {
        type : String,
        required : true
    },  
})

const Movie_model = mongoose.model("Movie_model", movieSchema);

module.exports = Movie_model;