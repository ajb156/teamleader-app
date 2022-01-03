import { types } from '../types';

const initialState = {
	workingDays: [],
	workingDaySelect: null,
	edit : false
};

export const workingDayReducer = (state = initialState, action) => {
	switch (action.type) {

		// Obtener las jornadas
		case types.workingDayGet:
			return {
				...state,
				workingDays: action.payload,
				edit: false
			}

    // Registar nueva jornada
		case types.workingDayRegister:
			return {
				...state,
				workingDays: [...state.workingDays, action.payload],
				edit: false
			};


		// Seleccionar jornada de trabajo.
		case types.workingDaySelect:
			return {
				...state,
				workingDaySelect: action.payload,
				edit: true
			};

		/**
		 * Editar jornada
		 * Activar / Desactivar jornada
		 */
		case types.workingDayEdit:
			return {
				...state,
				workingDays: [
					...state.workingDays.map((workingDays) => workingDays._id === action.payload._id ? action.payload : workingDays)
				],
				edit: false

			}
		case types.workingDayActivate:
			return {
				...state,
				workingDays: [
					...state.workingDays.map((workingDays) => workingDays._id === action.payload._id ? action.payload : workingDays)
				],
				edit: false
			}

			case types.workingDayEditMode: 
			return {
				...state,
				edit: false
			}

		default:
			return state;
	}
};
