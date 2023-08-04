const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((response) => {
        // console.log(response)
      res.render("movies", {
        allMovies: response,
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
  .then((response) => {
    // console.log(response)
    res.render("movieDetails", {
        movieDetail: response
    })
  })
  .catch((error) => {
    next(error)
  })
});

module.exports = router;
