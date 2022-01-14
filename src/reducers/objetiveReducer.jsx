import { types } from "../types";

const initialState = {
  objetives: [],
  families: [],
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

    default:
      return state;
  }
};
