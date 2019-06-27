import {RECEIVE_POKEMON,RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';
import lodash from 'lodash';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = lodash.assign({},state);
  switch(action.type){
    case RECEIVE_POKEMON:
      return action.items;
    case RECEIVE_ALL_POKEMON:
      debugger;
    default:
      return state;
  }
}

export default itemsReducer;