import React from 'react';
import { Route } from 'react-router-dom';
import About from './about';
import './App.css';
import BeerList from './BeerList';

function App() {
  return (
    <div className="App">
      <BeerList/>
      <Route exact path ='/about'>
        <About />
      </Route>
    </div>
  );
}

export default App;
