const Movie_model = require("../models/movie_model.js");
const fs = require("fs");

const movieDefaultCon = async (req, res) => {

    const storageMovie = await Movie_model.find({});

    console.log("storageMovie", storageMovie);
    
   await res.render("index.ejs", { MovieList : storageMovie });
}

const addMovieToList = async (req, res) => {

   console.log("req.body", req.body, req.file);
    const movieData = {
       path : req.file.path,
       title : req.body.title,
       description : req.body.description,
       releaseDate : req.body.releaseDate,
       rating : req.body.rating,
       genre : req.body.genre
   }
   console.log("movieData",( movieData));
  
   const newMovie = new Movie_model(movieData);
   await newMovie.save();

   console.log("newMovie", newMovie);
   

    res.redirect("/");  
} 

const editMovie = async (req, res) => {
    const {id} = req.params;

    const newEditMovie = await Movie_model.findOne({_id : id});

    console.log("storageMovie", newEditMovie);

    await res.render("movie_edit.ejs", { newEditMovie });
}

const updateMovie = async (req, res) => {

    const {id} = req.params;

    const newUpdateMovie = await Movie_model.findByIdAndUpdate(
        {
            _id : id
        },{
            title : req.body.title,
            description : req.body.description,
            path : req.file.path,
            releaseDate : req.body.releaseDate,
            rating : req.body.rating,
            genre : req.body.genre
        },{
            new : true
    });

    console.log("newUpdateMovie", newUpdateMovie);



    if(req.file) {

        fs.unlink(newUpdateMovie.path, (err) => {
            if(!err) {
                console.log("file is deleted");
            }
        });

        newUpdateMovie.path = req.file.path;
    }
    
    // await newUpdateMovie.remove();

    res.redirect("/");
}

const daleteMovie = async (req, res) => {

    const {id} = req.params;

    const DeleteMovie = await Movie_model.findByIdAndDelete(id);

    console.log("newDeleteMovie", DeleteMovie);

    res.redirect("/");
}
    

module.exports = { movieDefaultCon, addMovieToList, editMovie, updateMovie, daleteMovie}