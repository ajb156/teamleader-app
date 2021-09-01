import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/authActions';
import { useHistory } from 'react-router-dom';

export const NavBar = () => {
	const { auth } = useSelector((state) => state);
	const history = useHistory();

	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(startLogout());
		history.replace('/');
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-danger'>
			<div className='container'>
				<a className='navbar-brand' href='/escritorio'>
					TeamLeader
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNavDropdown'
					aria-controls='navbarNavDropdown'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNavDropdown'>
					<ul className='navbar-nav'>
						
						<NavLink
							className='nav-link'
							activeClassName='active'
							exact
							to='/escritorio'>
							Inicio
						</NavLink>

						<NavLink
							className='nav-link'
							activeClassName='active'
							exact
							to='/tiendas'>
							Tiendas
						</NavLink>

						<NavLink
							className='nav-link'
							activeClassName='active'
							exact
							to='/usuarios'>
							Usuarios
						</NavLink>

						<NavLink
							className='nav-link'
							activeClassName='active'
							exact
							to='/objetivos'>
							Objetivos
						</NavLink>

						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='/#'
								id='navbarDropdownMenuLink'
								data-toggle='dropdown'
								aria-expanded='false'>
								Productos
							</a>
							<div
								className='dropdown-menu'
								aria-labelledby='navbarDropdownMenuLink'>
								<NavLink
									className='dropdown-item'
									activeClassName='active'
									exact
									to='/productos'>
									Productos
								</NavLink>

								<NavLink
									className='dropdown-item'
									activeClassName='active'
									exact
									to='/bolsas'>
									Bolsas
								</NavLink>
							</div>
						</li>
					</ul>

					<ul className='navbar-nav ml-auto'>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle active'
								href='/#'
								id='navbarDropdownMenuLink'
								data-toggle='dropdown'
								aria-expanded='false'>
								{auth.user.name}
							</a>
							<div
								className='dropdown-menu'
								aria-labelledby='navbarDropdownMenuLink'>
								<a className='dropdown-item' href='/#'>
									Action
								</a>
								<a className='dropdown-item' href='/#'>
									Another action
								</a>
								<button
									className='dropdown-item'
									onClick={() => handleLogout()}>
									Salir
								</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
