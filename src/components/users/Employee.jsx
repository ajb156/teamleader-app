import React from 'react';
import { useDispatch } from 'react-redux';
import { activateEmployee } from '../../actions/employeActions';

export const Employee = ({ employee, index, handleEditUser }) => {
	const dispatch = useDispatch();

	const handleActivateEmployee = (employee) => {
		
		dispatch(activateEmployee(employee));
	};

	return (
		<tr>
			<th className='d-none d-sm-block'>
				{index + 1}
			</th>
			<td>{employee.name}</td>
			<td>{employee.email}</td>
			<td>{employee.store.name}</td>
			<td>{employee.rol.toUpperCase()}</td>
			<td>
				{employee.active ? (
					<span className='badge  badge-success'>ACTIVO</span>
				) : (
					<span className='badge badge-warning'>INACTIVO</span>
				)}
			</td>
			<td className='text-center'>
				<button
					type='button'
					className='btn btn-sm btn-primary'
					onClick={() => handleEditUser(employee)}>
					Editar
				</button>
				<button
					type='button'
					onClick={() => handleActivateEmployee(employee)}
					className={`btn btn-sm  ml-1 ${
						employee.active ? 'btn-secondary' : 'btn-success'
					}`}>
					{!employee.active ? 'Activar' : 'Desactivar'}
				</button>
			</td>
		</tr>
	);
};
