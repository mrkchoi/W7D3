import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import {Route} from 'react-router-dom';

const App = props => {
  return (
    <Route path="/" component={PokemonIndexContainer} />
  );
};

export default App;