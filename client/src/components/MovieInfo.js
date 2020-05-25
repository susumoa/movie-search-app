import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { Default } from 'react-spinners-css';
import '../App.css';
import Rating from './Rating';
import FullPlot from './FullPlot';

const MovieInfo = (props) => {
  let { id } = useParams();
  const { getSelectedMovie } = props;
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState({});
  const [showFullPlot, setShowFullPlot] = useState(false);

  useEffect(() => {
    getSelectedMovie(id)
      .then((movie) => {
        return movie;
      })
      .then((movie) => {
        setMovieInfo(movie);
        setLoading(false);
      });
  }, [setLoading]);

  const handleShowFullPlot = (e) => {
    e.preventDefault();

    setShowFullPlot((prevState) => !prevState);
  };

  if (loading === true) {
    return (
      <div className='container'>
        <Default color='#b3b3b3' size={40} />
        <p className='loading'>Loading</p>
      </div>
    );
  } else {
    const { Title, Poster, Year, Plot, Actors, Director, imdbID, Ratings } = movieInfo;

    return (
      <div>
        <div className='title-container'>
          <Link to='/'>
            <Icon id='back-button' name='arrow left' size='big' />
          </Link>
          <h1 className='title'>{Title}</h1>
        </div>
        <div className='container'>
          <img className='poster-img' src={Poster === 'N/A' ? 'https://www.popcorn.app/assets/app/images/placeholder-movieimage.png' : Poster} alt={Poster === 'N/A' ? 'No poster available' : `${Title} poster`} id={imdbID} />

          {Plot !== 'N/A'
            && <p className='plot'>
              <span className='tag'>Plot: </span>
              {!showFullPlot ? (
                <span>
                  {`${Plot.substring(0, 100)}... `}
                  <span className='plot-reveal' onClick={handleShowFullPlot}>
                    Show more
                  </span>
                </span>
              ) : (
                <FullPlot handleShowFullPlot={handleShowFullPlot} plot={Plot} />
              )}
            </p>
          }

          <p className='actors'>
            <span className='tag'>Actors:</span> {Actors}
          </p>
          <p className='director'>
            <span className='tag'>Director:</span> {Director}
          </p>
          <p>
            <span className='tag'>Released:</span> {Year}
          </p>
          <a href={`https://www.imdb.com/title/${imdbID}`}>IMDb</a>

          <div className='ratings-container'>
            <p className='rating'>Ratings:</p>
            <Rating ratings={Ratings} />
          </div>
        </div>
      </div>
    );
  }
};

export default MovieInfo;
