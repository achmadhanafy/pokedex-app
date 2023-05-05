import {all} from 'redux-saga/effects'
import pokemonSaga from './pokemon/pokemonSaga'

function* saga(){
 yield all([
  ...pokemonSaga
 ])
}

export default saga