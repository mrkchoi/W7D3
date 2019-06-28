import React from 'react';
import {Link} from 'react-router-dom';

const pokemonIndexItem = ({pokemon}) => (
  <Link to={`/pokemon/${pokemon.id}`}>
    <li>
      {pokemon.name}
      <img 
        src={pokemon.image_url} 
        alt="kenny likes you" 
        style={{ maxWidth: "25px" }} 
      />
    </li>
  </Link>
);

export default pokemonIndexItem;