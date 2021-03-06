import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DesktopScreen } from '../components/DesktopScreen';
import { StoresScreen } from '../components/stores/StoresScreen';
import { NavBar } from '../components/NavBar';
import { EditStore } from '../components/stores/EditStore';
import { Toaster } from 'react-hot-toast';
import { EmployeesScreen } from '../components/users/EmployeesScreen';
import { ProductsScreen } from '../components/products/ProductsScreen';
import { ProductsForm } from '../components/products/ProductsForm';
import { BagsScreen } from '../components/bags/BagsScreen';

import { WorkingDayScreen } from '../components/workingDay/WorkingDayScreen';
import { ObjetiveFamily } from '../components/objetives/ObjetiveFamily';
import { PeriodsScreen } from '../components/periods/PeriodsScreen';
import { ObjetiveForm } from '../components/objetives/ObjetiveForm';
import { ObjetiveScreen } from '../components/objetives/ObjetiveScreen';

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

					<Route exact path='/productos' component={ProductsScreen} />
					<Route exact path='/productos/nuevo' component={ProductsForm} />

					<Route exact path='/bolsas' component={BagsScreen} />
					<Route exact path='/jornadas' component={WorkingDayScreen} />
					<Route exact path='/objetivos/nuevo' component={ObjetiveForm} />
					<Route exact path='/periodos' component={PeriodsScreen} />
          <Route exact path='/objetivos' component={ObjetiveScreen} />
					<Route exact path='/objetivos/nuevo' component={ObjetiveForm} />
					<Route exact path='/objetivos-familia' component={ObjetiveFamily} />

					<Route exact path='/tiendas/editar/:id' component={EditStore} />
					<Redirect to='/escritorio' />
				</Switch>
			</div>
		</Fragment>
	);
};
