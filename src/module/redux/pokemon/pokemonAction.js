import { GET_POKEMONS, GET_POKEMONS_CLEAR, GET_POKEMONS_ERROR, GET_POKEMONS_SUCCESS } from "./pokemonConstant";

export const getPokemons = (payload) => ({
 type: GET_POKEMONS,
 payload
})
export const getPokemonsSucess = (payload) => ({
 type: GET_POKEMONS_SUCCESS,
 payload
})
export const getPokemonsError = (payload) => ({
 type: GET_POKEMONS_ERROR,
 payload
})
export const getPokemonsClear = (payload) => ({
 type: GET_POKEMONS_CLEAR,
 payload
})