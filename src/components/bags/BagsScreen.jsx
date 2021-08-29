import React from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Bag } from './Bag';
import { BagsForm } from './BagsForm';

export const BagsScreen = () => {
	const { bags } = useSelector((state) => state.bags);

	return (
		<Fragment>
			<div className='card animate__animated animate__fadeIn'>
				<div className='card-header'>
					<i className='fas fa-store-alt'></i> Listado de Tiendas
					<span className='badge badge-secondary'></span>
					<button
						type='button'
						className='btn btn-danger float-right'
						data-toggle='modal'
						data-target='#bagsModal'>
						<i className='fa fa-plus'></i> Nueva Bolsa
					</button>
				</div>
				<div className='card-body'>
					<div className='table-responsive-sm'>
						<table className='table table-striped'>
							<thead>
								<tr>
									<th scope='col'>#</th>
									<th scope='col'>Bolsa</th>
									<th scope='col'>Estado</th>
									<th scope='col'>Escritorio</th>
									<th scope='col' className='text-center'>
										Acciones
									</th>
								</tr>
							</thead>
							<tbody>
								{bags.map((bag, i) => (
									<Bag bag={bag} index={i} key={i} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<BagsForm />
		</Fragment>
	);
};
