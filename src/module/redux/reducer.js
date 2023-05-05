import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemon/pokemonReducer";

export const reducer = combineReducers({
 pokemon: pokemonReducer
})