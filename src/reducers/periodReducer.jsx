import { types } from "../types";

const initialState = {
  periods: [],
};

/**
 * Reducer de los periodos
 */

export const periodReducer = (state = initialState, action) => {
  switch (action.type) {

    // Selecciona un periodo
    case types.PeriodSelect:
      return {
        ...state,
        selectPeriod: action.payload,
      };

    //edita un periodo
    case types.PeriodsUpdate:
      return {
        ...state,
        selectPeriod: null,
        periods: [...state.periods.map((period) => period._id === action.payload._id ? action.payload: period)]
      }

    default:
      return state;
  }
};
