import React from 'react';
import { useDispatch } from 'react-redux';
import { deactivateStore } from '../../actions/storeActions';

export const Store = ({ store, index }) => {
	const dispatch = useDispatch();

	// const handleDelete = (store) => {
	// 	dispatch(deleteStore(store));
	// };

	const handleActivate = (store) => {
		dispatch(deactivateStore(store))
	}

	return (
		<tr>
			<th scope='row'>{index + 1}</th>
			<td>{store.name}</td>
			<td>
				{store.active ? (
					<span className='badge  badge-success'>ACTIVO</span>
				) : (
					<span className='badge badge-warning'>INACTIVO</span>
				)}
			</td>
			<td className='text-center'>
				<button type='button' className='btn btn-sm btn-primary'>
					Editar
				</button>
				<button
					type='button'
					className={`btn btn-sm  ml-1 ${ (store.active) ? 'btn-secondary' : 'btn-success' }`}
					onClick={() => handleActivate(store)}>
					{ (!store.active) ? 'Activar' : 'Desactivar' }
				</button>
			</td>
		</tr>
	);
};
