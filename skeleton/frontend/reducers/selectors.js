export const selectAllPokemon = (state) => (
  Object.values(state.entities.pokemon)
);

export const selectSinglePokemon = (state, id) => (
  Object.values(state.entities.pokemon.id)
);

window.selectAllPokemon = selectAllPokemon;