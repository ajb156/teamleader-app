import { types } from '../types';

const initialState = {
	employees: [],
};

export const employeeReducer = (state = initialState, action) => {
	switch (action.type) {
		// Obtener todos los empleados
		case types.employeesGet:
			return {
				...state,
				employees: action.payload,
			};

		// Registrar un usuario
		case types.employeeRegister:
			return {
				...state,
				employees: [...state.employees, action.payload],
			};

		// Seleccionar el usuario a editar
		case types.selectEmployeeEdit:
			return {
				...state,
				editEmployee: action.payload,
			};

		// Editar y activar o sedactivar un usuario
		case types.employeeEdit:
		case types.employeeActivate:
			return {
				...state,
				editEmployee: null,
				employees: [
					...state.employees.map((employee) =>
						employee._id === action.payload._id ? action.payload : employee
					),
				],
			};

		default:
			return state;
	}
};
