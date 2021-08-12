import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const NavBar = () => {
	const { auth } = useSelector((state) => state);

	return (
		<nav className='navbar navbar-expand-md navbar-dark bg-danger'>
			<div className='container'>
				<a className='navbar-brand' href='/#'>
					TeamLeader
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<Link className='nav-link' to='/'>
							Inicio
						</Link>
						<Link className='nav-link' to='/tiendas'>
							Tiendas
						</Link>
						<a className='nav-link' href='/#'>
							Features
						</a>
						<a className='nav-link' href='/#'>
							Pricing
						</a>
					</div>
				</div>

				<div
					class='collapse navbar-collapse flex-grow-1 text-right'
					id='myNavbar'>
					<ul class='navbar-nav ms-auto flex-nowrap'>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle active'
								href='/#'
								id='navbarDropdownMenuLink'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								{auth.user.name}
							</a>
							<ul
								className='dropdown-menu'
								aria-labelledby='navbarDropdownMenuLink'>
								<li>
									<a className='dropdown-item' href='/#'>
										Action
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='/#'>
										Another action
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='/#'>
										Something else here
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
