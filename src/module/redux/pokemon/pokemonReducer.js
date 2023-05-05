import { GET_POKEMONS, GET_POKEMONS_CLEAR, GET_POKEMONS_ERROR, GET_POKEMONS_SUCCESS } from "./pokemonConstant";
import { getPokemonsInitialState } from "./pokemonInitialState";

const pokemonInitialState = {
 ...getPokemonsInitialState,
 action:''
}

export const pokemonReducer = (state = pokemonInitialState, action) => {
 const {payload, type} = action;
 const actions = {
  [GET_POKEMONS]: () => ({
   ...state,
   getPokemonsResponse: getPokemonsInitialState.getPokemonsResponse,
   getPokemonsError: getPokemonsInitialState.getPokemonsError,
   getPokemonsParam: payload,
   action: type
  }),
  [GET_POKEMONS_SUCCESS]: () => ({
   ...state,
   getPokemonsResponse: payload,
   action: type
  }),
  [GET_POKEMONS_ERROR]: () => ({
   ...state,
   getPokemonsError: payload,
   action: type
  }),
  [GET_POKEMONS_CLEAR]: () => ({
   ...state,
   ...getPokemonsInitialState,
   action: type
  }),
  DEFAULT: () => state,
 };
 return (actions[type] || actions.DEFAULT());
}