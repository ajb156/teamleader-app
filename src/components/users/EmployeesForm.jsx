import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { employeeRegister, saveEditUser } from '../../actions/employeActions';

export const EmployeesForm = ({ stores, edit, setEdit }) => {
	const [employee, setEmployee] = useState({
		name: '',
		email: '',
		password: '',
		store: '',
		rol: '',
		_id: '',
	});

	const { editEmployee } = useSelector((state) => state.employees);

	const dispatch = useDispatch();

	useEffect(() => {
		if (edit) {
			setEmployee({
				name: editEmployee.name,
				email: editEmployee.email,
				password: '',
				store: editEmployee.store._id,
				rol: editEmployee.rol,
				_id: editEmployee._id,
			});
		} else {
			setEmployee({
				name: '',
				email: '',
				password: '',
				store: '',
				rol: '',
			});
		}
	}, [edit, editEmployee]);

	const { name, email, password, rol, store } = employee;

	// Manejo de los imputs del formulario
	const handleInput = (e) => {
		setEmployee({
			...employee,
			[e.target.name]: e.target.value,
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		if (!edit) {
			dispatch(employeeRegister(employee));
		} else {
			setEdit(false);
			dispatch(saveEditUser(employee));
		}
	};

	return (
		<form onSubmit={handleForm}>
			<div className='form-group'>
				<label htmlFor='exampleInputEmail1'>Nombre:</label>
				<input
					type='text'
					className='form-control'
					placeholder='Introduzca un nombre '
					name='name'
					value={name}
					onChange={handleInput}
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='exampleInputEmail1'>Email:</label>
				<input
					type='email'
					className='form-control'
					placeholder='Introduzca un email'
					name='email'
					value={email}
					onChange={handleInput}
				/>
			</div>

			<div className='form-group'>
				<label html='exampleInputEmail1'>Contraseña:</label>
				<input
					type='text'
					className='form-control'
					placeholder='Introduzca una contraseña'
					name='password'
					value={password}
					onChange={handleInput}
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='rol'>Permisos de usuario:</label>
				<select
					className='form-control'
					name='rol'
					value={rol}
					onChange={handleInput}>
					<option>Seleccione un rol</option>
					<option value='admin'>Admin</option>
					<option value='team'>Team</option>
					<option value='leader'>Leader</option>
					<option value='manager'>Manager</option>
				</select>
			</div>

			<div className='form-group'>
				<label htmlFor='store'>Asignar a tienda:</label>
				<select
					className='form-control'
					name='store'
					value={store}
					onChange={handleInput}>
					<option>Seleccione una tienda</option>
					{stores.map((store) => (
						<option value={store._id} key={store._id}>
							{store.name}
						</option>
					))}
				</select>
			</div>
			<hr />
			<button type='submit' className='btn btn-danger float-right'>
				Guardar
			</button>
			<button
				type='button'
				className='btn btn-secondary float-right mr-1'
				data-dismiss='modal'>
				Cerrar
			</button>
		</form>
	);
};
