import { types } from "../types";

const initialState = {
  periods: [],
};

/**
 * Reducer de los periodos
 */

export const periodReducer = (state = initialState, action) => {
  switch (action.type) {
    // Crear un periodo
    case types.PeriodCreate:
      return {
        ...state,
        periods: [...state.periods, action.payload],
      };

    // Obtener los periodos
    case types.PeriodsGet:
      return {
        ...state,
        periods: action.payload,
      };

    // Activar // desactivar un periodo
    case types.PeriodsActivate:
      return {
        ...state,
        periods: state.periods.map((period) =>
          period._id === action.payload._id ? action.payload : period
        ),
      };

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
        periods: [
          ...state.periods.map((period) =>
            period._id === action.payload._id ? action.payload : period
          ),
        ],
      };

    default:
      return state;
  }
};
