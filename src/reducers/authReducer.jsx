import { types } from '../types';

const initialState = {
	logged: false,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.userLogin:
			return {
				...state,
				logged: true,
				user: action.payload,
			};

		case types.checkLogin:
			return {
				...state,
				logged: false,
				user: {},
			};

		case types.renewToken:
			return {
				...state,
				logged: true,
				user: action.payload
			};
		
		case types.userLogout:
			return {
				...state,
				logged: false,
				user: {}
			}

		default:
			return state;
	}
};
