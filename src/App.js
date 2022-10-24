import React from 'react';
import BusinessList from './BusinessList';
import PokemonList from './PokemonList';
import './App.css';

function App() {

  return (
    <div className="App">
      <PokemonList />
      <BusinessList />
    </div>
  );
}

export default App;
