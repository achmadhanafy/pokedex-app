import { call, put, takeLatest } from "redux-saga/effects";
import { getPokemonsApi } from "./pokemonApi";
import { getPokemonsError, getPokemonsSucess } from "./pokemonAction";
import { GET_POKEMONS } from "./pokemonConstant";

function* getPokemons(params) {
  try {
    const response = yield call(getPokemonsApi, params.payload);
    yield put(getPokemonsSucess(response?.data));
  } catch (error) {
    yield put(getPokemonsError(error?.response?.data));
  }
}

const pokemonSaga = [
 takeLatest(GET_POKEMONS, getPokemons)
]

export default pokemonSaga