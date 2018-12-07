import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {

    const pokemon = this.props.pokemon.map(poke => (
      <li>
        {poke.name}
        <img src={poke.image_url} />
      </li>
    ));
    
    return (
      <ul>
        {pokemon}
      </ul>
    );
  }
}

export default PokemonIndex;