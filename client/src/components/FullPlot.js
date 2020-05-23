import React from 'react';

const FullPlot = (props) => {
  const { plot, handleShowFullPlot } = props;
  return (
    <span>
      {plot}{' '}
      <span className='plot-reveal' onClick={handleShowFullPlot}>
        Hide
      </span>
    </span>
  );
};

export default FullPlot;
