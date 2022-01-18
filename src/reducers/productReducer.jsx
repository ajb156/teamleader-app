import { types } from "../types";

const initialState = {
  products: [],
};

/**
 * Reducer de productos
 */
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // Obtener todos los productos
    case types.ProductsGet:
      return {
        ...state,
        products: action.payload,
      };

    // Crear nuevo producto
    case types.ProductCreate:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
