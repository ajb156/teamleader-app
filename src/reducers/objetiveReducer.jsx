import { types } from "../types";

const initialState = {
  families: [],
  periods: [],
};

export const objetiveReducer = (state = initialState, action) => {
  switch (action.type) {
    //Obtener las familias
    case types.ObjetiveFamily:
      console.log("Objetivos");
      return {
        ...state,
        families: action.payload,
      };

    case types.ObjetiveFamilyCreate:
      return {
        ...state,
        families: [...state.families, action.payload],
      };

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

    default:
      return state;
  }
};
