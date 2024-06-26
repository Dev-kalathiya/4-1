import React from 'react';
import './App.css'

const Greeting = ({ name = 'Guest' }) => {
  return (
    <div id="root">
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default Greeting;