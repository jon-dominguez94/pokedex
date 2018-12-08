import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';


import configureStore from './store/store';


import * as APIUtil from './util/api_util';


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={PokemonIndexContainer} />
    </HashRouter>
  </Provider>
);


window.fetchSinglePokemon = APIUtil.fetchSinglePokemon;
window.fetchAllPokemon = APIUtil.fetchAllPokemon;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, rootEl);
});