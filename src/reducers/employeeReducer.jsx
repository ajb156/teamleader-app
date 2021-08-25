import { types } from "../types";

const initialState = {
	employees: [],
};

export const employeeReducer = (state = initialState, action) => {
	switch (action.type) {

		case types.employeesGet:
			return {
				...state,
				employees: action.payload
			}
			
		case types.employeeRegister:
			return {
        ...state,
        employees: [...state.employees, action.payload]
      }

		case types.employeeEdit:
			return {
				...state,
				editEmployee: action.payload
			}
		
		case types.employeeActivate:
			console.log(action)
			return {
				...state,
				employees: [
					...state.employees.map((employee) => employee._id === action.payload._id ? action.payload : employee)
				]
			}

		default:
			return state;
	}
};
