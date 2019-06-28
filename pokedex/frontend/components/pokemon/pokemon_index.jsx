import React from 'react';
import { Route } from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

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
      <div>
        <Route
          path="/pokemon/:pokemonId"
          component={PokemonDetailContainer}
          className="pokemon_detail_container" />

        <ul className="sidebar_nav">
          {pokemon.map((pokemon, idx) => <PokemonIndexItem key={idx} pokemon={pokemon} />)}
        </ul >
      </div>
    );
  }
};

export default PokemonIndex;