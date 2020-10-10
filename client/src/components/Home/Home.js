import React from 'react'
import Filtering from '../Filtering/Filtering';
import User from '../User/User';

const Home = () =>{
  return(
    <div>
      <h1>Welcom to Elite</h1>
      <Filtering/>
      <User/>
    </div>
  );
};

export default Home