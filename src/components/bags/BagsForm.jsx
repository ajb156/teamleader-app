import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	createNewBag,
	editSelectedBag,
	getAllBags,
} from '../../actions/bagActions';

export const BagsForm = () => {
	const [bag, setBag] = useState({
		name: '',
		inFront: false,
	});

	const dispatch = useDispatch();
	const { editBag } = useSelector((state) => state.bags);
	const [error, setError] = useState(false);
	const { name, inFront } = bag;

	useEffect(() => {
		dispatch(getAllBags());
	}, [dispatch]);

	useEffect(() => {
		if (editBag) {
			setBag(editBag);
		}
	}, [editBag]);

	const handleInputs = (e) => {
		setBag({
			...bag,
			[e.target.name]:
				e.target.type === 'checkbox' ? e.target.checked : e.target.value,
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		if (!name.trim()) {
			setError(true);
			return;
		}
		setError(false);

		if (editBag) {
			dispatch(editSelectedBag(bag));
		} else {
			dispatch(createNewBag(bag));
			setBag({
				name: '',
			});
		}
	};

	return (
		<div
			className='modal fade'
			id='bagsModal'
			role='dialog'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'>
			<div className='modal-dialog' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLabel'>
							Nueva Bolsa {inFront}
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

							<div className='form-group form-check'>
								<input
									checked={inFront}
									value={inFront}
									name='inFront'
									type='checkbox'
									className='form-check-input'
									onChange={handleInputs}
								/>
								<label className='form-check-label' htmlFor='inFront'>
									Mostrar en escritorio
								</label>
							</div>

							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-secondary'
									data-dismiss='modal'>
									Close
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
