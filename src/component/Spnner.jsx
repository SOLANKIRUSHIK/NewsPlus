import React from 'react';
import loder from './loder.gif';
import '../index.css'
const Spinner = () => {
  return (
    <div id="spinner">
      <img src={loder} alt="Loading..." style={{ height: '85px' }} />
    </div>
  );
}

export default Spinner;
