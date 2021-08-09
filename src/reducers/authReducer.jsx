import { types } from '../types';

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
  rol: null
};

export const authReducer = (state = initialState, action) => {


  switch (action.type) {
    case types.userLogin:
      return {
        ...state,
        logged: true,
      }
  
    default:
      return state;
  }



}
