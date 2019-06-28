import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchPokemon(this.props.match.params.pokemonId);
    // debugger
  }

  componentDidUpdate(prevProps) {
    debugger
    if (this.props.match.params.pokemonId !== prevProps.match.params.pokemonId) {
      this.props.fetchPokemon(this.props.match.params.pokemonId);
    }
  }
  
  render() {
    if (!this.props.pokemonDetails) return null;
    return (
      <div>
        <div>Pokemon Details</div>
        <div>{this.props.pokemonDetails.name}</div> 
        {/* <div>{this.props.itemDetails}</div> */}
      </div>
    );
  }
}

export default PokemonDetail;