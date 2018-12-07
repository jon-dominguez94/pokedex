import React from 'react';

const PokemonIndexItem = ({pokemon}) => (
  <li>{pokemon.name}
    <img src={pokemon.image_url} />
  </li>
);

export default PokemonIndexItem;