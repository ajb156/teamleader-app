import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DesktopScreen } from '../components/DesktopScreen';
import { StoresScreen } from '../components/stores/StoresScreen';
import { NavBar } from '../components/NavBar';
import { EditStore } from '../components/stores/EditStore';
import { Toaster } from 'react-hot-toast';
import { EmployeesScreen } from '../components/users/EmployeesScreen';

export const LoginRouter = () => {
	return (
		<Fragment>
			<NavBar />
			<div className='container pt-3'>
				<Toaster position='top-right' reverseOrder={false} />
				<Switch>
					<Route exact path='/escritorio' component={DesktopScreen} />
					<Route exact path='/usuarios' component={EmployeesScreen} />
					<Route exact path='/tiendas' component={StoresScreen} />
					<Route exact path='/tiendas/editar/:id' component={EditStore} />
					<Redirect to='/escritorio' />
				</Switch>
			</div>
		</Fragment>
	);
};
