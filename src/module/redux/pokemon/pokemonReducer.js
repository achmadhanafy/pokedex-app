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
   getPokemonsParam: payload,
   action: type
  }),
  [GET_POKEMONS_SUCCESS]: () => ({
   ...state,
   getPokemonsResponse: payload,
   getPokemonsError: getPokemonsInitialState.getPokemonsError,
   action: type
  }),
  [GET_POKEMONS_ERROR]: () => ({
   ...state,
   getPokemonsError: payload,
   getPokemonsResponse: getPokemonsInitialState.getPokemonsResponse,
   action: type
  }),
  [GET_POKEMONS_CLEAR]: () => ({
   ...state,
   ...getPokemonsInitialState,
   action: type
  }),
  DEFAULT: () => state,
 };
 return (actions[type] || actions.DEFAULT)();
}