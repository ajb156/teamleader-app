import React, { Fragment } from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllBags } from '../actions/bagActions';
import { DesktopBags } from './desktop/DesktopBags';

export const DesktopScreen = () => {
	
	const { bags } = useSelector((state) => state.bags);

	// Si la bolsa esta activa & la queremos mostrar en el front
	const activeBags = bags.filter((bag) => bag.inFront && bag.active === true);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllBags());
	}, [dispatch]);

	return (
		<Fragment>
			{/** Si tenemos bolsas activas las mostramos */}
			{activeBags.length ? (
				<>
					<h4 className='text-center text-uppercase'>Bolsas</h4>
					<hr />
					<div className='row animate__animated animate__fadeIn'>
						{activeBags.map((bag) => {
							return <DesktopBags key={bag._id} bag={bag} />;
						})}
					</div>
				</>
			) : null}

			<div className='col-xs-8'>Este es el panel de 8</div>

			<div className='col-xs-4'>
				<h4 className='text-center text-uppercase'>Últimas Noticias</h4>
				<div className='card shadow mb-4'>
					<div className='card-header py-3'>
						<h5 className='m-0 font-weight-bold text-primary'>
							Development Approach
						</h5>
					</div>
					<div className='card-body'>
						<p>
							SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees
							in order to reduce CSS bloat and poor page performance. Custom CSS
							classNamees are used to create custom components and custom
							utility classNamees.
						</p>
						<p className='mb-0'>
							Before working with this theme, you should become familiar with
							the Bootstrap framework, especially the utility classNamees.
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
