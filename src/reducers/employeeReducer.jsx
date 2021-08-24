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

		default:
			return state;
	}
};
