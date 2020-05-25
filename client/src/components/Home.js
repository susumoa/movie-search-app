import React from 'react';
import Movie from './Movie';
import '../App.css';
import { Form, Button, Input, Icon } from 'semantic-ui-react';

const Home = (props) => {
  const { handleSubmit, movieList, handleMovieSelection, handleChange, value } = props;

  return (
    <div>
      <div className='title-container'>
        <h1 className='title'>Movie Search</h1>
      </div>
      <Form className='form' onSubmit={handleSubmit}>
        <Form.Field className='input'>
          <Input placeholder='Movie title' value={value} onChange={handleChange} />
        </Form.Field>
        <Button id='button' type='submit' onSubmit={handleSubmit}>
          Search
        </Button>
      </Form>
      <ul>
        {!movieList ? (
          <div>
            <p>No movies found with this title</p>
            <Icon name='exclamation triangle' size='big' />
          </div>
        ) : (
          movieList.map((movie) => <Movie key={movie.imdbID} movieInfo={movie} handleMovieSelection={handleMovieSelection} />)
        )}
      </ul>
    </div>
  );
};

export default Home;
