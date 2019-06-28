import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import {Route} from 'react-router-dom';

const App = props => {
  return (
    <div className="app_container">
      <Route 
        path="/" 
        component={PokemonIndexContainer}/>
    </div>
  );
};

export default App;