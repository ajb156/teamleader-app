import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store';

export const TeamLeader = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};
