import React from 'react';
import App from './App.jsx';

const {useState} = React;

const MovieListSearch = ({searchMovies}) => {
  const [entry, setEntry] = useState('');

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      searchMovies(entry);
      setEntry('');
    }}><input className="search-bar" type="text" placeholder="Search for a movie..." value={entry} onChange={(event) => {
      setEntry(event.target.value);
    }}/>
    <button className="search" type="submit">Search/Clear</button></form>
  )
};

export default MovieListSearch;