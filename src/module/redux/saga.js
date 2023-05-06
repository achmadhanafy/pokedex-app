import {all} from 'redux-saga/effects'
import pokemonSaga from './pokemon/pokemonSaga'
import habitatSaga from './habitat/habitatSaga'

function* saga(){
 yield all([
  ...pokemonSaga,
  ...habitatSaga
 ])
}

export default saga