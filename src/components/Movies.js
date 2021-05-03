import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div className="movie-list">
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div key={index}>
            <h3>Title: {movie.title} </h3>
            <p>Time: {movie.time} </p>
            <p>Genres:
            <ul> {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li> 
              ))}</ul>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Movies;
