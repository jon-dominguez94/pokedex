import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => (
  <li className="pokemon-index-item">
    <Link to={`/pokemon/${pokemon.id}`} >
      {pokemon.name}
      <img src={pokemon.image_url} />
    </Link>
  </li>
);

export default PokemonIndexItem;