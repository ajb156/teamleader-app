import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { DesktopScreen } from '../components/DesktopScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

const auth = {
	logged: true,
};

export const AppRouter = () => {
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
