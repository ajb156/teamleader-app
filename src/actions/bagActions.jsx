import toast from 'react-hot-toast';
import $ from 'jquery';
import { clienteAxiosToken } from '../helpers/axios';
import { types } from '../types';

/**
 * Obtener todas las bolsas
 */
export const getAllBags = () => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.get('/bags');
			dispatch(getBags(res.data.bags));
		} catch (error) {
			toast.error('No se pudieron obtener las bolsas');
		}
	};
};

// Accion al obtener las bolsas
const getBags = (bags) => {
	return {
		type: types.getBags,
		payload: bags,
	};
};

/**
 * Crear una nueva bolsa
 */
export const createNewBag = (bag) => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.post('/bags/create', bag);
			$('#bagsModal').modal('hide');
			toast.success(`${res.data.msg}`);
			dispatch(createBag(res.data.bag));
		} catch (error) {
			toast.error('No se pudo crear la bolsa');
		}
	};
};

// Accion de una nueva bolsa
const createBag = (bag) => {
	return {
		type: types.newBag,
		payload: bag,
	};
};

/**
 * Seleccionar la bolsa para editar
 */
export const selectBag = (bag) => {
	return async (dispatch) => {
		dispatch(bagSelect(bag));
		$('#bagsModal').modal('show');
	};
};

// Seleccionar una bolsa
const bagSelect = (bag) => {
	return {
		type: types.selectBag,
		payload: bag,
	};
};

/**
 * Guardar la bolsa editada
 */
export const editSelectedBag = (bag) => {
	return async (dispatch) => {
		try {
			$('#bagsModal').modal('hide');
			const promise = clienteAxiosToken.put(`/bags/edit/${bag._id}`, bag);
			toast.promise(promise, {
				loading: 'Actualizando bolsa ⏳',
				success: <b>Bolsa actualizada 🔥!</b>,
				error: <b>No se pudo actualizar la bolsa 🤯.</b>,
			});
			const res = await promise;
			dispatch(editBagSelected(res.data.bag));
		} catch (error) {
			console.log(error);
		}
	};
};

// Guardar la bolsa editada
const editBagSelected = (bag) => {
	console.log(bag);
	return {
		type: types.bagEdit,
		payload: bag,
	};
};

/**
 * Activar/Desactivar una bolsa
 */
export const activateBag = (bag) => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.post(`/bags/activate/${bag._id}`);
			dispatch(bagActivate(res.data.bag));
			toast.success(`${res.data.bag.name}, actualizada correctamente`);
		} catch (error) {
			toast.error('No se pudo activar la bolsa');
		}
	};
};

// Activar la bolsa
const bagActivate = (bag) => {
	return {
		type: types.bagActivate,
		payload: bag,
	};
};
