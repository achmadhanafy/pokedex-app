import { api } from "../../util"

const pokemonApi = {
 getPokemons: 'pokemon'
}

export const getPokemonsApi = (payload) => {
 const {offset, limit} = payload
 return api.get(`${pokemonApi.getPokemons}?offset=${offset}&limit=${limit}`);
}