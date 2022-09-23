import React from 'react';
import MovieListItem from './MovieListItem.jsx'
import App from './App.jsx'

const MovieList = ({movies}) => (

     <div className="movie-list">
       {movies.map((movie, index) => (
       <MovieListItem movie={movie.title} key={index}/>))}
     </div>
);



export default MovieList;