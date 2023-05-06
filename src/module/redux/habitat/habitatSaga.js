import { call, put, takeLatest } from "redux-saga/effects";
import { getHabitatDetailApi, getHabitatsApi } from "./habitatApi";
import { getHabitatDetailError, getHabitatDetailSucess, getHabitatsError, getHabitatsSucess  } from "./habitatAction";
import * as CONST from "./habitatConstant";

function* getHabitats(params) {
  try {
    const response = yield call(getHabitatsApi, params.payload);
    yield put(getHabitatsSucess(response?.data));
  } catch (error) {
    yield put(getHabitatsError(error?.response?.data));
  }
}

function* getHabitatDetail(params) {
  try {
    const response = yield call(getHabitatDetailApi, params.payload);
    yield put(getHabitatDetailSucess(response?.data));
  } catch (error) {
    yield put(getHabitatDetailError(error?.response?.data));
  }
}

const habitatSaga = [
 takeLatest(CONST.GET_HABITATS, getHabitats),
 takeLatest(CONST.GET_HABITAT_DETAIL, getHabitatDetail)
]

export default habitatSaga