import * as CONST from "./habitatConstant";
import { getHabitatDetailInitialState, getHabitatsInitialState } from "./habitatInitialState";

const habitatInitialState = {
  ...getHabitatsInitialState,
  ...getHabitatDetailInitialState,
  action: "",
};

export const habitatReducer = (state = habitatInitialState, action) => {
  const { payload, type } = action;
  const actions = {
    [CONST.GET_HABITATS]: () => ({
      ...state,
      getHabitatsParam: payload,
      action: type,
    }),
    [CONST.GET_HABITATS_SUCCESS]: () => ({
      ...state,
      getHabitatsResponse: payload,
      getHabitatsError: getHabitatsInitialState.getHabitatsError,
      action: type,
    }),
    [CONST.GET_HABITATS_ERROR]: () => ({
      ...state,
      getHabitatsError: payload,
      getHabitatsResponse: getHabitatsInitialState.getHabitatsResponse,
      action: type,
    }),
    [CONST.GET_HABITATS_CLEAR]: () => ({
      ...state,
      ...getHabitatsInitialState,
      action: type,
    }),

    [CONST.GET_HABITAT_DETAIL]: () => ({
      ...state,
      getHabitatDetailParam: payload,
      action: type,
    }),
    [CONST.GET_HABITAT_DETAIL_SUCCESS]: () => ({
      ...state,
      getHabitatDetailResponse: payload,
      getHabitatDetailError: getHabitatDetailInitialState.getHabitatDetailError,
      action: type,
    }),
    [CONST.GET_HABITAT_DETAIL_ERROR]: () => ({
      ...state,
      getHabitatDetailError: payload,
      getHabitatDetailResponse: getHabitatDetailInitialState.getHabitatDetailResponse,
      action: type,
    }),
    [CONST.GET_HABITAT_DETAIL_CLEAR]: () => ({
      ...state,
      ...getHabitatDetailInitialState,
      action: type,
    }),
    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
