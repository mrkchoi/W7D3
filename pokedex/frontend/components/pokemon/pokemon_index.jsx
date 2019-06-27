import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon;
    return(
      <ul>
        {pokemon.map((pokemon, idx) => <PokemonIndexItem key={idx} pokemon={pokemon} />)}
      </ul >
    );
  }
};

export default PokemonIndex;