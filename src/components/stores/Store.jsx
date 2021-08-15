import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteStore } from '../../actions/storeActions';

export const Store = ({ store, index }) => {
	const dispatch = useDispatch();

	const handleDelete = (store) => {
		dispatch(deleteStore(store));
	};

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
					className='btn btn-sm btn-secondary ml-1'
					onClick={() => handleDelete(store)}>
					Eliminar
				</button>
			</td>
		</tr>
	);
};
