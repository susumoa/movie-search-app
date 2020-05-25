import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Movie = (props) => {
  const { movieInfo } = props;
  const { Title, Year, Poster, imdbID } = movieInfo;
  return (
    <div className='gallery'>
      <Link to={`/movie/${imdbID}`}>
        <img src={Poster === 'N/A' ? 'https://www.popcorn.app/assets/app/images/placeholder-movieimage.png' : Poster} alt={Poster === 'N/A' ? 'No poster available' : `${Title} poster`} id={imdbID} />
        <p className='desc-title'>{Title}</p>
        <p className='desc-year'>{Year}</p>
      </Link>
    </div>
  );
};

export default Movie;
