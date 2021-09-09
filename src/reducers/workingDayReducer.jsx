import { types } from '../types';

const initialState = {
	workingDays: [],
	workingDaySelect: null,
};

export const workingDayReducer = (state = initialState, action) => {
	switch (action.type) {

		// Obtener las jornadas
		case types.workingDayGet:
			return {
				...state,
				workingDays: action.payload
			}

    // Registar nueva jornada
		case types.workingDayRegister:
			return {
				...state,
				workingDays: [...state.workingDays, action.payload],
			};

		case types.workingDaySelect:
			return {
				...state,
				workingDaySelect: action.payload
			}

		default:
			return state;
	}
};
