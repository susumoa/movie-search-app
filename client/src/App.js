import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MovieInfo from './components/MovieInfo';

function App() {
  const [value, setValue] = useState('');
  const [movieList, setMovieList] = useState([]);
  // const [movieInfo, setMovieInfo] = useState({})

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value.trim() === '') {
      alert('Enter a movie title');
    } else {
      getMovies(value.trim())
        .then((movies) => setMovieList(movies.Search))
        .then(setValue(''));
    }
  };

  const getMovies = async (value) => {
    const apiUrl = `/movies/${value}`;
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      return json;
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const getSelectedMovie = async (id) => {
    const apiUrl = `/movie/${id}`;
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      return json;
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/movie/:id'>
            <MovieInfo getSelectedMovie={getSelectedMovie} />
          </Route>
          <Route exact path='/'>
            <Home handleSubmit={handleSubmit} movieList={movieList} handleChange={handleChange} value={value} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
