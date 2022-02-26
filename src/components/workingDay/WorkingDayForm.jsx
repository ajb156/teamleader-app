import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createWorkingDay, editWorkingDay } from '../../actions/workingDayActions';

export const WorkingDayForm = () => {
	const [error, setError] = useState(false);
	const [workingDay, setWorkingDay] = useState({
		name: '',
		_id: '',
	});


	const {edit, workingDaySelect} = useSelector(state => state.workingDays);

	useEffect(() => {
		if (edit) {
			setWorkingDay({
				name: workingDaySelect.name,
				_id: workingDaySelect._id
			})
		}else{
			setWorkingDay({
				name: ''
			})
		}
	}, [workingDaySelect, edit])

	const dispatch = useDispatch();
	const { name } = workingDay;

	// Crear nueva jornada
	const handleForm = (e) => {
		e.preventDefault();
		if (!name.trim()) {
			setError(true);
			return;
		}
		if (edit) {
			dispatch(editWorkingDay(workingDay));
			console.log('Editando')
		}else{
			dispatch(createWorkingDay(workingDay));
		}
		setWorkingDay({
			name: ''
		})
	};

	// Manejador de los inputs del formulario
	const handleInputs = ({ target }) => {
		setWorkingDay({
			...workingDay,
			[target.name]: target.value,
		});
	};

	return (
		<div
			className='modal fade'
			id='workingDayModal'
			role='dialog'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'>
			<div className='modal-dialog' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLabel'>
							{!edit ? 'Nueva' : 'Edición de '} Jornada
						</h5>
						<button
							type='button'
							className='close'
							data-dismiss='modal'
							aria-label='Close'>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-body'>
						<form onSubmit={handleForm}>
							<div className='mb-3'>
								<label htmlFor='name' className='form-label'>
									Nombre:
								</label>
								<input
									type='text'
									className={`form-control ${error ? 'is-invalid' : ''}`}
									name='name'
									value={name}
									onChange={handleInputs}
								/>
								<div className='invalid-feedback'>Introduzca un nombre.</div>
							</div>

							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-secondary'
									data-dismiss='modal'>
									Cerrar
								</button>
								<button type='submit' className='btn btn-danger'>
									Guardar
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
