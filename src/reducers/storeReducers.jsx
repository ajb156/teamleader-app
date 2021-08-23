import { types } from '../types';

const initialState = {
	stores: [],
};

export const storeReducer = (state = initialState, action) => {
	switch (action.type) {
		// Obtener todas las tiendas
		case types.getStores:
			return {
				...state,
				editStore: null,
				stores: action.payload,
			};

		// Crear una nueva tienda
		case types.createStore:
			return {
				...state,
				stores: [...state.stores, action.payload],
			};

		// Desactivar una tienda
		case types.deactivateStore:
			return {
				...state,
				stores: [
					...state.stores.map((store) =>
						store._id === action.payload._id ? action.payload : store
					),
				],
			};

		// Seleccion del producto a editar
		case types.selectEditStore:
			return {
				...state,
				editStore: action.payload,
			};

		// Editar tienda
		case types.editStore:
			return {
				...state,
				editStore: null,
				stores: state.stores.map(store => store._id === action.payload._id ? store = action.payload : store)
			}

		default:
			return state;
	}
};
