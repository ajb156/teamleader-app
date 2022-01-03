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

		// Seleccionar jornada de trabajo.
		case types.workingDaySelect:
			return {
				...state,
				workingDaySelect: action.payload
			};

		case types.workingDayActivate:
			return {
				...state,
				workingDays: [
					...state.workingDays.map((workingDays) => workingDays._id === action.payload._id ? action.payload : workingDays)
				]
				
			}

		default:
			return state;
	}
};
