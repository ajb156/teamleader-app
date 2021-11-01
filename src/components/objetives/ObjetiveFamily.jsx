import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFamily } from '../../actions/objetiveActions';
import { Family } from './Families/Family';
import { FamilyForm } from './Families/FamilyForm';

export const ObjetiveFamily = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFamily());
	}, [dispatch]);

	const { families } = useSelector((state) => state.objetives);
	return (
		<Fragment>
			<div className='card animate__animated animate__fadeIn'>
				<h5 className='card-header'>
					<i className='fa fa-shopping-cart'></i> Listado de Familias de
					Objetivo
					<span className='badge badge-secondary'></span>
					<button
						type='button'
						className='btn btn-danger float-right'
						data-toggle='modal'
						data-target='#objetiveFamilyModal'>
						<i className='fa fa-plus'></i> Nueva
					</button>
				</h5>
				<div className='card-body'>
					<div className='table-responsive-sm'>
						<table className='table table-striped'>
							<thead>
								<tr>
									<th>#</th>
									<th>Nombre</th>
                  <th>Estado</th>
									<th className="text-center">Acciones</th>
								</tr>
							</thead>
							<tbody>
								{families.map((family, i) => (
									<Family family={family} index={i} key={family._id}/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<FamilyForm />
		</Fragment>
	);
};
