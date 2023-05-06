import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemon/pokemonReducer";
import { habitatReducer } from "./habitat/habitatReducer";

export const reducer = combineReducers({
 pokemon: pokemonReducer,
 habitat: habitatReducer,
})