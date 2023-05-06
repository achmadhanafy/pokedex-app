import * as CONST from "./habitatConstant";

export const getHabitats = (payload) => ({
  type: CONST.GET_HABITATS,
  payload,
});
export const getHabitatsSucess = (payload) => ({
  type: CONST.GET_HABITATS_SUCCESS,
  payload,
});
export const getHabitatsError = (payload) => ({
  type: CONST.GET_HABITATS_ERROR,
  payload,
});
export const getHabitatsClear = (payload) => ({
  type: CONST.GET_HABITATS_CLEAR,
  payload,
});

export const getHabitatDetail = (payload) => ({
  type: CONST.GET_HABITAT_DETAIL,
  payload,
});
export const getHabitatDetailSucess = (payload) => ({
  type: CONST.GET_HABITAT_DETAIL_SUCCESS,
  payload,
});
export const getHabitatDetailError = (payload) => ({
  type: CONST.GET_HABITAT_DETAIL_ERROR,
  payload,
});
export const getHabitatDetailClear = (payload) => ({
  type: CONST.GET_HABITAT_DETAIL_CLEAR,
  payload,
});
