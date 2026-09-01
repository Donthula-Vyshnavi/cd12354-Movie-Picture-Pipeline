<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 62849ae (Fix movie list API response handling)
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`).then((response) => {
      setMovies(response.data.movies);
    });
=======
    axios
      .get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`)
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
>>>>>>> 62849ae (Fix movie list API response handling)
  }, []);

  return (
    <ul>
      {movies.map((movie) => (
        <li className="movieItem" key={movie.id} onClick={() => onMovieClick(movie)}>
          {movie.title}
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
