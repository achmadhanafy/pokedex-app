import * as CONST from "./pokemonConstant";

export const getPokemons = (payload) => ({
  type: CONST.GET_POKEMONS,
  payload,
});
export const getPokemonsSucess = (payload) => ({
  type: CONST.GET_POKEMONS_SUCCESS,
  payload,
});
export const getPokemonsError = (payload) => ({
  type: CONST.GET_POKEMONS_ERROR,
  payload,
});
export const getPokemonsClear = (payload) => ({
  type: CONST.GET_POKEMONS_CLEAR,
  payload,
});

export const getPokemonDetail = (payload) => ({
 type: CONST.GET_POKEMON_DETAIL,
 payload,
});
export const getPokemonDetailSucess = (payload) => ({
 type: CONST.GET_POKEMON_DETAIL_SUCCESS,
 payload,
});
export const getPokemonDetailError = (payload) => ({
 type: CONST.GET_POKEMON_DETAIL_ERROR,
 payload,
});
export const getPokemonDetailClear = (payload) => ({
 type: CONST.GET_POKEMON_DETAIL_CLEAR,
 payload,
});