import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createWorkingDay } from '../../actions/workingDayActions';

export const WorkingDayForm = ({ workingDaySelect }) => {
	const [error, setError] = useState(false);
	const [workingDay, setWorkingDay] = useState({
		name: '',
	});

	useEffect(() => {
		if (workingDaySelect) {
			setWorkingDay(workingDaySelect)
		}
	}, [workingDaySelect])

	console.log(workingDaySelect)

	const dispatch = useDispatch();
	const { name } = workingDay;

	// Crear nueva jornada
	const handleForm = (e) => {
		e.preventDefault();
		if (!name.trim()) {
			setError(true);
			return;
		}
		dispatch(createWorkingDay(workingDay));
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
							{!workingDaySelect ? 'Nueva' : 'Edición de '} Jornada
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
