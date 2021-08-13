import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { checkToken } from '../actions/authActions';
import { AuthRouter } from './AuthRouter';
import { LoginRouter } from './LoginRouter';
import { PrivateRoute } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

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
					<PublicRouter
						isAuthenticated={auth.logged}
						exact path='/auth/login'
						component={AuthRouter}
					/>
					<PrivateRoute
						isAuthenticated={auth.logged}
						path='/'
						component={LoginRouter}
					/>

				<Redirect to='/' />
				</Switch>
			</div>
		</Router>
	);
};
