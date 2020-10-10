import React from 'react';

const Filtering = () => {
  return (
    <div className='btn-group-toggle' data-toggle='buttons'>
      <label className='btn btn-secondary active'>
        <input type='checkbox' checked /> Javascript
      </label>

      <label className='btn btn-secondary active'>
        <input type='checkbox' checked /> Python
      </label>
      
      <label className='btn btn-secondary active'>
        <input type='checkbox' checked /> Golang
      </label>
    </div>
  );
};

export default Filtering;
