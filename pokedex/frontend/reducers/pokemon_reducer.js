import {RECEIVE_ALL_POKEMON, RECEIVE_POKEMON} from '../actions/pokemon_actions';
import lodash from 'lodash';
const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = lodash.assign({},state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return lodash.merge(action.pokemon,newState);
    case RECEIVE_POKEMON:
      newState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      return newState;
    default:
      return state;
  }
}

export default pokemonReducer;

/*

const oldObj = {
  one: {
    two: {
      three: 'hello',
      four: 'goodbye'
    }
  }
}

const newObj = merge({}, oldObj);

newObj.one.two.four = 'goodbye';
*/