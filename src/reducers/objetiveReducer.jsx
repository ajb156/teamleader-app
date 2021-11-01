import { types } from '../types';

const initialState = {
	families: [],
	periods: [],
};

export const objetiveReducer = (state = initialState, action) => {
	switch (action.type) {
		//Obtener las familias
		case types.ObjetiveFamily:
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
		case types.PeriodGet:
			return {
				...state,
				periods: action.payload,
			};

		default:
			return state;
	}
};
