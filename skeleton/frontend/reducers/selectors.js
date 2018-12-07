export const selectAllPokemon = (state) => (
  Object.values(state.entities.pokemon)
);

window.selectAllPokemon = selectAllPokemon;