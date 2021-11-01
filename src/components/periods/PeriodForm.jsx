import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPeriod } from '../../actions/periodActions';

export const PeriodForm = () => {
	const [period, setPeriod] = useState({
		name: '',
		start: '',
		end: '',
	});

	const [error, setError] = useState(false);
	const { name, start, end } = period;
	const dispatch = useDispatch();

	const handleForm = (e) => {
		e.preventDefault();
		console.log(period);
		if (!name.trim()) {
			setError(true);
			return;
		}
		setError(false);
		dispatch(createPeriod(period));
	};

	const handleInputs = ({ target }) => {
		setPeriod({
			...period,
			[target.name]: target.value,
		});
	};

	return (
		<div
			className='modal fade'
			id='periodModal'
			role='dialog'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'>
			<div className='modal-dialog' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLabel'>
							Jornada
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
									Periodo:
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

							<div className='mb-3'>
								<label htmlFor='name' className='form-label'>
									Fecha de inicio:
								</label>
								<input
									type='date'
									className={`form-control ${error ? 'is-invalid' : ''}`}
									name='start'
									value={start}
									onChange={handleInputs}
								/>
								<div className='invalid-feedback'>Introduzca un nombre.</div>
							</div>

							<div className='mb-3'>
								<label htmlFor='name' className='form-label'>
									Fecha de fin:
								</label>
								<input
									type='date'
									className={`form-control ${error ? 'is-invalid' : ''}`}
									name='end'
									value={end}
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
