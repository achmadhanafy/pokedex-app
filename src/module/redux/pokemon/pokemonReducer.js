import * as CONST from "./pokemonConstant";
import { getPokemonDetailInitialState, getPokemonsInitialState } from "./pokemonInitialState";

const pokemonInitialState = {
  ...getPokemonsInitialState,
  ...getPokemonDetailInitialState,
  action: "",
};

export const pokemonReducer = (state = pokemonInitialState, action) => {
  const { payload, type } = action;
  const actions = {
    [CONST.GET_POKEMONS]: () => ({
      ...state,
      getPokemonsParam: payload,
      action: type,
    }),
    [CONST.GET_POKEMONS_SUCCESS]: () => ({
      ...state,
      getPokemonsResponse: payload,
      getPokemonsError: getPokemonsInitialState.getPokemonsError,
      action: type,
    }),
    [CONST.GET_POKEMONS_ERROR]: () => ({
      ...state,
      getPokemonsError: payload,
      getPokemonsResponse: getPokemonsInitialState.getPokemonsResponse,
      action: type,
    }),
    [CONST.GET_POKEMONS_CLEAR]: () => ({
      ...state,
      ...getPokemonsInitialState,
      action: type,
    }),

    [CONST.GET_POKEMONS_DETAIL]: () => ({
     ...state,
     getPokemonDetailParam: payload,
     action: type,
   }),
   [CONST.GET_POKEMONS_DETAIL_SUCCESS]: () => ({
     ...state,
     getPokemonDetailResponse: payload,
     getPokemonDetailError: getPokemonDetailInitialState.getPokemonDetailError,
     action: type,
   }),
   [CONST.GET_POKEMONS_DETAIL_ERROR]: () => ({
     ...state,
     getPokemonDetailError: payload,
     getPokemonDetailResponse: getPokemonDetailInitialState.getPokemonDetailResponse,
     action: type,
   }),
   [CONST.GET_POKEMONS_DETAIL_CLEAR]: () => ({
     ...state,
     ...getPokemonDetailInitialState,
     action: type,
   }),
    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
