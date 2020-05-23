import React from 'react';
import './Rating.css';
import styled, { keyframes } from 'styled-components';

const Rating = (props) => {
  const imdb = props.ratings[0];
  const rotten = props.ratings[1];
  const metacritic = props.ratings[2];
  const imdbStroke = Math.round(440 - imdb.Value.split('/')[0] * 44);
  const rottenStroke = Math.round(440 - rotten.Value.split('%')[0] * 4.4);
  const metacriticStroke = Math.round(440 - metacritic.Value.split('/')[0] * 4.4);

  const imdbAnimation = keyframes`
  to {
    stroke-dashoffset: ${imdbStroke};
  }
`;

  const rottenAnimation = keyframes`
  to {
    stroke-dashoffset: ${rottenStroke};
  }
`;

  const metacriticAnimation = keyframes`
  to {
    stroke-dashoffset: ${metacriticStroke};
  }
`;

  const ImdbStyle = styled.circle`
    animation: ${imdbAnimation} 1s ease-out forwards;
  `;

  const RottenStyle = styled.circle`
    animation: ${rottenAnimation} 1s ease-out forwards;
  `;

  const MetacriticStyle = styled.circle`
    animation: ${metacriticAnimation} 1s ease-out forwards;
  `;

  return (
    <div className='ratings'>
      <div className='item imdb'>
        <p>IMDb</p>
        <h2>{imdb.Value}</h2>
        <svg width='160' height='160'>
          <g>
            <ImdbStyle id='circle' className='circle_animation' r='69.85699' cy='81' cx='81' strokeWidth='8' stroke='#f5c518' fill='none' />
          </g>
        </svg>
      </div>

      <div className='item rotten'>
        <p>Rotten Tomatoes</p>
        <h2>{rotten.Value}</h2>
        <svg width='160' height='160'>
          <g>
            <RottenStyle id='circle' className='circle_animation' r='69.85699' cy='81' cx='81' strokeWidth='8' stroke='#fa320a' fill='none' />
          </g>
        </svg>
      </div>

      <div className='item metacritic'>
        <p>Metacritic</p>
        <h2>{metacritic.Value}</h2>
        <svg width='160' height='160'>
          <g>
            <MetacriticStyle id='circle' className='circle_animation' r='69.85699' cy='81' cx='81' strokeWidth='8' stroke='#333333' fill='none' />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Rating;
