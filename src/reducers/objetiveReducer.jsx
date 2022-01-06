import { types } from "../types";

const initialState = {
  objetives: [],
  families: [],
  periods: [],
};

export const objetiveReducer = (state = initialState, action) => {
  switch (action.type) {

    // Obtener todos los objetivos
    case types.ObjetiveGet:
      return {
        ...state,
        objetives: action.payload
      }
    // Crear nuevo objetivo
    case types.ObjetiveCreate:
      return {
        ...state,
        objetives: action.payload,
      };

    //Obtener las familias
    case types.ObjetiveFamily:
      return {
        ...state,
        families: action.payload,
      };

    // Crear una familia
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
