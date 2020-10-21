import React from 'react';
import Working from '../../../src/assets/images/working.jpg';

const TopDescription = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div class='col-md-7'>
        <h3>Join our community to connect.collaborate.create()</h3>
        <h5>Our mission is to connect developers across the globe.</h5>       
        </div>
        <div class='col-md-5'>
        <img src={Working} />
        </div>
      </div>
    </div>
  );
};

export default TopDescription;
