import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function onload() {
      const data = await getPokemon();

      setPokemon(data.results);
    }

    onload();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {
          pokemon.map((poke, i) => <div key={poke.pokemon + i}>
            <p>{poke.pokemon}</p>
          </div>)
        }
      </header>
    </div>
  );
}

export default App;
