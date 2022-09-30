import React from 'react';
import MovieList from './MovieList.jsx'
// import App from './App.jsx'

const MovieListItem = ({movie}) => {
  // console.log('props in MovieListItem', movie);
  const [watchActive, setWatchActive] = useState(false);
  // const [watchActive, setWatchActive] = useState(false);

  return (
   <div className="movie-list-item">
     {movie}
     <button className="watched" type="button">Watched</button>
   </div>
  )
};

export default MovieListItem;