import { call, put, takeLatest } from "redux-saga/effects";
import { getPokemonDetailApi, getPokemonsApi } from "./pokemonApi";
import {
  getPokemonDetailError,
  getPokemonDetailSucess,
  getPokemonsError,
  getPokemonsSucess,
} from "./pokemonAction";
import * as CONST from "./pokemonConstant";

function* getPokemons(params) {
  try {
    const response = yield call(getPokemonsApi, params.payload);
    yield put(getPokemonsSucess(response?.data));
  } catch (error) {
    yield put(getPokemonsError(error?.response?.data));
  }
}

function* getPokemonDetail(params) {
  try {
    const response = yield call(getPokemonDetailApi, params.payload);
    yield put(getPokemonDetailSucess(response?.data));
  } catch (error) {
    yield put(getPokemonDetailError(error?.response?.data));
  }
}

const pokemonSaga = [
  takeLatest(CONST.GET_POKEMONS, getPokemons),
  takeLatest(CONST.GET_POKEMON_DETAIL, getPokemonDetail),
];

export default pokemonSaga;
