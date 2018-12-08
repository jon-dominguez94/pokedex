import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount() {
    // debugger
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  render() {
    return (
      <ul>
        <li>
          {this.props.pokemon.name}
        </li>
        <li>
          {this.props.pokemon.image_url}
        </li>
      </ul>
    );
  }
}

export default PokemonDetail;