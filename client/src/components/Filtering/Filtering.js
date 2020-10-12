import React, { useState } from 'react';

const Filtering = () => {
  const initialState = {
    javaScript: false,
    python: false,
    golang: false,
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div className='btn-group-toggle' data-toggle='buttons'>
      <input
        name='javaScript'
        value={state.javaScript}
        type='checkbox'
        onClick={handleChange}
      />
      Javascript
    </div>
  );
};

export default Filtering;
