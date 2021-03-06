import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { bagReducer } from './reducers/bagReducer';
import { employeeReducer } from './reducers/employeeReducer';
import { objetiveReducer } from './reducers/objetiveReducer';
import { periodReducer } from './reducers/periodReducer';
import { productReducer } from './reducers/productReducer';
import { storeReducer } from './reducers/storeReducers';
import { workingDayReducer } from './reducers/workingDayReducer';

// Activar el complemento REDUX en el navegador
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Combinamos los reducers
const reducers = combineReducers({
	auth: authReducer,
	stores: storeReducer,
	bags: bagReducer,
	employees: employeeReducer,
	workingDays: workingDayReducer,
	objetives: objetiveReducer,
	periods: periodReducer,
	products: productReducer,
});

// Exportamos el store
export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
