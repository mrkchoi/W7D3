import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon, fetchAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  const store = configureStore();
  window.store = store;
  
  ReactDOM.render(
    <h1>POKEDEX</h1>, document.getElementById('root')
  )
}); 

