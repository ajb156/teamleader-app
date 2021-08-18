import { types } from '../types';

const initialState = {
  stores: []
};

export const storeReducer = (state = initialState, action) => {

  
  switch (action.type) {
    case types.getStores:
			return {
				...state,
        stores: action.payload
			};

		case types.createStore:
			return {
				...state,
				stores: [...state.stores, action.payload]
			}

		case types.deactivateStore:
			return {
				...state,
				stores: [...state.stores.map(store => store._id === action.payload._id ? action.payload : store)]
			}

		default:
			return state;
	}
};
