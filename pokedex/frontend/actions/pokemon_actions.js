import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const fetchAllPokemon = () => dispatch => (
  APIUtil.fetchAllPokemon().then(res => {
    return dispatch(receiveAllPokemon(res));
  })
);

export const receivePokemon = pokemon => ({
  type: RECEIVE_POKEMON,
  pokemon
});

export const fetchPokemon = pokemonId => dispatch => (
  APIUtil.fetchPokemon(pokemonId).then(res => dispatch(receivePokemon(res)))
);