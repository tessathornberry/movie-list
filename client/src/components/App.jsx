import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import MovieListSearch from './MovieListSearch.jsx';
import MovieListAdd from './MovieListAdd.jsx'


const {useState} = React;

const App = () => {
  const [movies, setMovies] = useState(['Princess Bride', 'Peter Pan', 'Ever After', 'Van Helsing', 'Serenity', 'The Prophecy']);
  const [searchedMovies, setSearchedMovies] = useState(['Princess Bride', 'Peter Pan', 'Ever After', 'Van Helsing', 'Serenity', 'The Prophecy']);
  // const [entry, setEntry] = useState('');

  /** This function allows the user to search the movies **/
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
      alert('Sorry, that movie is not found on the list');
    }
  }

 /** This function allows the user to add movies but will allow non-case-related variations of the same movie**/
  function addMovie(movieString) {
    setMovies(searchedMovies);
    var lowerCaseString = movieString.toLowerCase()
    var isRepeat = false;

    for (var i = 0; i < searchedMovies.length; i++) {
      var lowerCaseMovie = (searchedMovies[i].title.toLowerCase());
      if (lowerCaseMovie === lowerCaseString) {
        isRepeat = true;
      }
    }

    if (!isRepeat) {
      setMovies(searchedMovies);
      movieString = {title: movieString};
      setSearchedMovies([...searchedMovies, movieString]);
      setMovies([...movies, movieString]);
    } else {
      alert('That movie might already be on the list!');
    }
  };
  /**this function allows the watched status of a mogie to be undated */


  /** this is the html that gets appended to the DOM **/
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