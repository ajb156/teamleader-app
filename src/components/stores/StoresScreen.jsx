import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStores, newStore } from '../../actions/storeActions';
import { Store } from './Store';

export const StoresScreen = () => {
	const [store, setStore] = useState({
		name: '',
	});

	const { name } = store;

	const dispatch = useDispatch();
	const { stores } = useSelector((state) => state.stores);

	useEffect(() => {
		dispatch(getStores());
	}, [dispatch]);

	//TODO:: Crear nueva tienda

	const handleInput = ({ target }) => {
		setStore({
			...store,
			[target.name]: target.value,
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		if (name.length === 0) {
			console.log('Deben estar llenos');
			return;
		}
		setStore({
			name: '',
		});
		dispatch(newStore(store));
	};

	return (
		<Fragment>
			<div className='card'>
				<div className='card-header'>
					<i className='fas fa-store-alt'></i> Listado de Tiendas
					<span className='badge badge-secondary'></span>
					<button
						type='button'
						className='btn btn-danger float-right'
						data-toggle='modal'
						data-target='#storeModal'>
						<i className='fa fa-plus'></i> Nueva Tienda
					</button>
				</div>
				<div className='card-body'>
					<table className='table table-striped'>
						<thead>
							<tr>
								<th scope='col'>#</th>
								<th scope='col'>Tienda</th>
								<th scope='col'>Estado</th>
								<th scope='col' className="text-center">Acciones</th>
							</tr>
						</thead>
						<tbody>
							{stores.map((store, i) => (
								<Store store={store} key={store._id} index={i} />
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div
				className='modal fade'
				id='storeModal'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Registrar Tienda
							</h5>
						</div>
						<div className='modal-body'>
							<form onSubmit={handleForm}>
								<div className='mb-3'>
									<label htmlFor='name' className='form-label'>
										Tienda:
									</label>
									<input
										type='text'
										className='form-control'
										name='name'
										value={name}
										onChange={handleInput}
									/>
								</div>

								<div className='modal-footer'>
									<button
										type='button'
										className='btn btn-secondary'
										data-dismiss='modal'>
										Cerrar
									</button>
									<button
										type='submit'
										className='btn btn-danger'>
										Guardar
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
