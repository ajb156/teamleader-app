import React from 'react';
import { useDispatch } from 'react-redux';
import { selectBag } from '../../actions/bagActions';

export const Bag = ({ bag, index }) => {

	const dispatch = useDispatch();



	const handleActivate = () => {
	};
	
	const handleEdit = (bag) => {
		dispatch(selectBag(bag))
	};

	return (
		<tr>
			<th scope='row' className='d-none d-sm-block'>
				{index + 1}
			</th>
			<td>{bag.name}</td>
			<td>
				{bag.active ? (
					<span className='badge  badge-success'>ACTIVO</span>
				) : (
					<span className='badge badge-warning'>INACTIVO</span>
				)}
			</td>
			<td>
				{bag.inFront ? (
					<span className='badge  badge-success'>ACTIVO</span>
				) : (
					<span className='badge badge-warning'>INACTIVO</span>
				)}
			</td>
			<td className='text-center'>
				<button
					type='button'
					className='btn btn-sm btn-primary'
					onClick={() => handleEdit(bag)}>
					Editar
				</button>
				<button
					type='button'
					className={`btn btn-sm  ml-1 ${
						bag.active ? 'btn-secondary' : 'btn-success'
					}`}
					onClick={() => handleActivate(bag)}>
					{!bag.active ? 'Activar' : 'Desactivar'}
				</button>
			</td>
		</tr>
	);
};
