import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { storeReducer } from './reducers/storeReducers';

// Activar el complemento REDUX en el navegador
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Combinamos los reducers
const reducers = combineReducers({
	auth: authReducer,
	stores: storeReducer
});

// Exportamos el store
export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
