export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";


import * as APIUtil from '../util/api_util';



export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => dispatch => (
  APIUtil.fetchAllPokemon()
  .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);


  
export const receiveSinglePokemon = pokeData => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokeData
});

export const requestSinglePokemon = (id) => dispatch => (
  APIUtil.fetchSinglePokemon(id)
    .then(pokeData => dispatch(receiveSinglePokemon(pokeData)))
);




window.requestAllPokemon = requestAllPokemon;