import { connect } from 'react-redux';
import { selectSinglePokemon } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon,
  items: state.entities.item
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: () => dispatch(requestSinglePokemon())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
