import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as APIUtil from './util/api_util';

window.fetchSinglePokemon = APIUtil.fetchSinglePokemon;
window.fetchAllPokemon = APIUtil.fetchAllPokemon;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, rootEl);
});