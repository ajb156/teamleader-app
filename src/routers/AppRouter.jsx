import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { DesktopScreen } from '../components/DesktopScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';


export const AppRouter = () => {

	const { auth } = useSelector((state) => state);

	console.log(auth)
	
	return (
		<Router>
			<div>
				<Switch>

					<PublicRouter
						isAuthenticated={auth.logged}
						path='/auth'
						component={AuthRouter}
					/>

					<PrivateRoute
						isAuthenticated={auth.logged}
						exact
						path='/'
						component={DesktopScreen}
					/>

				</Switch>
			</div>
		</Router>
	);
};
