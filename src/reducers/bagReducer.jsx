import { types } from '../types';

const initialState = {
	bags: [],
};

/**
 * Reducer de las bolsas
 */

export const bagReducer = (state = initialState, action) => {
	switch (action.type) {
		// Obtener todas las bolsas
		case types.getBags:
			return {
				...state,
				bags: action.payload,
			};

		// Crear una nueva bolsa
		case types.newBag:
			return {
				...state,
				bags: [...state.bags, action.payload],
			};

		// Seleccionar la bolsa que vamos a editar
		case types.selectBag:
			return {
				...state,
				editBag: action.payload,
			}

		// Poner la bolsa en el state
		case types.bagActivate:
		case types.bagEdit:
			return {
				...state,
				editBag: null,
				bags: [...state.bags.map((bag) => bag._id === action.payload._id ? action.payload : bag)]
			}
			
		default:
			return state;
	}
};
