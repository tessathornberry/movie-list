import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import MovieListSearch from './MovieListSearch.jsx';
import MovieListAdd from './MovieListAdd.jsx'


const {useState} = React;

const App = () => {
  const [movies, setMovies] = useState([
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ]);

  const [searchedMovies, setSearchedMovies] = useState([
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ]);

  const [entry, setEntry] = useState('');

  // function searchMovies(movieString) {
  //   var newMoviesArray = [];
  //   movieString = movieString.toLowerCase()
  //   var isFound = false;
  //   for (var i = 0; i < movies.length; i++) {
  //     var lowerCaseMovie = (movies[i].title.toLowerCase());
  //     if (lowerCaseMovie.includes(movieString)) {
  //       isFound = true;
  //       newMoviesArray.push(movies[i]);
  //       setMovies(newMoviesArray);
  //     }
  //   }
  //   if (!isFound){
  //     alert('Sorry, that movie not found');
  //   }
  // }

  function searchMovies(movieString) {
    setMovies(searchedMovies);
    var newMoviesArray = [];
    console.log('searchedMovies');
    movieString = movieString.toLowerCase()
    var isFound = false;

    for (var i = 0; i < searchedMovies.length; i++) {
      var lowerCaseMovie = (searchedMovies[i].title.toLowerCase());
      if (lowerCaseMovie.includes(movieString)) {
        isFound = true;
        newMoviesArray.push(searchedMovies[i]);
        setMovies(newMoviesArray); //this is in charge of setting
      }
    }
    if (!isFound){
      alert('Sorry, that movie not found');
    }
  }

  function addMovie(movieString) {
    console.log('movies');
    var lowerCaseString = movieString.toLowerCase()
    var isRepeat = false;

    for (var i = 0; i < movies.length; i++) {
      var lowerCaseMovie = (movies[i].title.toLowerCase());
      if (lowerCaseMovie.includes(lowerCaseString)) {
        isRepeat = true;
      }
    }

    if (!isRepeat) {
      movieString = {title: movieString};
      setSearchedMovies([...searchedMovies, movieString]);
      setMovies([...movies, movieString]);
    }
  };

  return (
      <div className="movie-list-title"><h1>MovieList</h1>
        <MovieListSearch searchMovies={searchMovies}/>
        <MovieListAdd addMovie={addMovie}/>
        <button className="watched-tab" type="button">Watched</button>
        <button className="to-watch-tab" type="button">To Watch</button>
        <MovieList movies={movies}/>
      </div>


  )
};

export default App;