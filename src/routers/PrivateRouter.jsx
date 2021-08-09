import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { NavBar } from '../components/ui/NavBar';

export const PrivateRoute = ({
	isAuthenticated,
	component: Component,
	...rest
}) => {
	return (
		<Fragment>
			<NavBar />
			<div className='container pt-3'>
				<Route
					{...rest}
					component={(props) =>
						isAuthenticated ? <Component {...props} /> : <Redirect to='/auth' />
					}
				/>
			</div>
		</Fragment>
	);
};
