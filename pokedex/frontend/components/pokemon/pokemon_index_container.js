import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index';

import { selectAllPokemon } from '../../reducers/selectors';
import {fetchAllPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllPokemon: () => dispatch(fetchAllPokemon())
});


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PokemonIndex);