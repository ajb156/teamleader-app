import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { checkToken } from '../actions/authActions';
import { LoginScreen } from '../components/auth/LoginScreen';
import { LoginRouter } from './LoginRouter';
// import { PrivateRoute } from './PrivateRouter';
// import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
	const { auth } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkToken());
	}, [dispatch]);

	return (
		<Router>
			<div>
				<Switch>
					{auth.logged ? (
						<Route path='/' component={LoginRouter} />
					) : (
						<Route path='/' component={LoginScreen} />
					)}

					<Redirect to='/' />

					{/* <PublicRouter
						isAuthenticated={auth.logged}
						path='/auth/login'
						component={LoginScreen}
					/>

					<PrivateRoute
						path='/'
						component={LoginRouter}
						isAuthenticated={auth.logged}
					/> */}
				</Switch>
			</div>
		</Router>
	);
};
