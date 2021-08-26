import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { editStore } from '../../actions/storeActions';

export const EditStore = ({ history }) => {
	// Nuevo State de producto
	const [store, setStore] = useState({
		name: '',
	});

	const editStoreSelected = useSelector((state) => state.stores.editStore);
	const dispatch = useDispatch();

	useEffect(() => {
		setStore(editStoreSelected);
	}, [editStoreSelected]);

	// Si la tienda no existe o recargamos el navegador
	if (!store) {
		return <Redirect to={'/tiendas'} />;
	}

	const { name } = store;

	// manejador de los inputs
	const handleInput = (e) => {
		e.preventDefault();
		setStore({
			...store,
			[e.target.name]: e.target.value,
		});
	};

	// Manejador de formualario de edición.
	const handleEditForm = (e) => {
		e.preventDefault();
		dispatch(editStore(store));
		toast.success('Editado Correctamente!');
		history.push('/tiendas');
	};

	return (
		<div className='card animate__animated animate__fadeIn'>
			<h5 className='card-header'>
				<i className='fas fa-store-alt'></i> Tienda: {name}
			</h5>
			<div className='card-body'>
				<form onSubmit={handleEditForm}>
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
					<button type='submit' className='btn btn-danger float-right mr-1'>
						Guardar
					</button>
					<Link
						to='/tiendas'
						replace
						className='btn btn-secondary float-right mr-1'>
						Volver
					</Link>
				</form>
			</div>
		</div>
	);
};
