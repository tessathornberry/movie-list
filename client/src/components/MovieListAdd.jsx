import React from 'react';
import App from './App.jsx';

const {useState} = React;

const MovieListAdd = ({addMovie}) => {
const [movieEntry, setMovieEntry] = useState('');

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      addMovie(movieEntry);
      setMovieEntry('');
    }}><input className="add-bar" type="text" placeholder="Add a movie..." value={movieEntry} onChange={(event) => {
      setMovieEntry(event.target.value);
    }}/>
    <button className="add" type="submit">Add Movie</button></form>
  )
};

export default MovieListAdd;