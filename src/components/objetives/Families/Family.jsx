import React from 'react';

export const Family = ({ family, index }) => {
	// Dispact para activar una bolsa
	const handleActivate = (family) => {};

	// Dispacht de edicion de una bolsa
	const handleEdit = (family) => {};

	return (
		<tr>
			<th scope='row' className='d-none d-sm-block'>
				{index + 1}
			</th>
			<td>{family.name}</td>
			<td>
				{family.active ? (
					<span className='badge  badge-success'>ACTIVO</span>
				) : (
					<span className='badge badge-warning'>INACTIVO</span>
				)}
			</td>
			<td className='text-center'>
				<button
					type='button'
					className='btn btn-sm btn-primary'
					onClick={() => handleEdit(family)}>
					Editar
				</button>
				<button
					type='button'
					className={`btn btn-sm  ml-1 ${
						family.active ? 'btn-secondary' : 'btn-success'
					}`}
					onClick={() => handleActivate(family)}>
					{!family.active ? 'Activar' : 'Desactivar'}
				</button>
			</td>
		</tr>
	);
};
