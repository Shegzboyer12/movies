// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Movie 1', description: 'Description of Movie 1', trailerLink: 'embed_link_for_trailer1' },
  { id: 2, title: 'Movie 2', description: 'Description of Movie 2', trailerLink: 'embed_link_for_trailer2' },
  // Add more movies as needed
];

const Home = () => {
  return (
    <div>
      <h1>Movie List</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="movie-card">
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
