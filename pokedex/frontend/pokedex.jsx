import React from 'react';
import ReactDOM from 'react-dom';
import {receivePokemon, fetchPokemon,fetchAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/Root';
import lodash from 'lodash';


document.addEventListener('DOMContentLoaded', () => {
  window.receivePokemon = receivePokemon;
  window.fetchPokemon = fetchPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.lodash = lodash;
  const store = configureStore();
  window.store = store;
  
  ReactDOM.render(
    <Root store={store} />, 
    document.getElementById('root')
  );

}); 

