import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DesktopScreen } from '../components/DesktopScreen';
import { StoresScreen } from '../components/stores/StoresScreen';
import { NavBar } from '../components/NavBar';
import { Toaster } from 'react-hot-toast';

export const LoginRouter = () => {
	return (
		<Fragment>
			<NavBar />
			<Toaster position="top-right" />
			<div className='container pt-3'>
				<Switch>
					<Route exact path='/escritorio' component={DesktopScreen} />
					<Route exact path='/tiendas' component={StoresScreen} />
					<Redirect to='/escritorio' />
				</Switch>
			</div>
		</Fragment>
	);
};
