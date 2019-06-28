import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { fetchPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  let pokemonId = ownProps.match.params.pokemonId;
  return {
    pokemonDetails: state.entities.pokemon[pokemonId],
    itemDetails: state.entities.items
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPokemon: (id) => dispatch(fetchPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
