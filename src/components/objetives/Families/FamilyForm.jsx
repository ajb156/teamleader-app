import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createFamily } from '../../../actions/objetiveActions';

export const FamilyForm = () => {
	const [family, setFamily] = useState({
		name: '',
	});
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const { name } = family;

	const handleForm = (e) => {
		e.preventDefault();
		if (!name.trim()) {
			setError(true);
			return;
		}
		setError(false);
    dispatch(createFamily(family))
	};

	const handleInputs = ({ target }) => {
		setFamily({
			...family,
			[target.name]: target.value,
		});
	};

	return (
		<div
			className='modal fade'
			id='objetiveFamilyModal'
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
									Nombre de la familia:
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
