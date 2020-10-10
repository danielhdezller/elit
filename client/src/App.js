import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Filtering from './components/Filtering/Filtering'
import User from './components/User/User'

function App() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Elite!</h1> 
      <Filtering/>
      <User/>
    </div>
  );
}

export default App;
