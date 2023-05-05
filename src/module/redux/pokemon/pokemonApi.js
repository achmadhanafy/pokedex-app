import { api } from "../../util"

const pokemonApi = {
 getPokemons: 'pokemon'
}

export const getPokemonsApi = (payload) => {
 return api.get(pokemonApi.getPokemons);
}