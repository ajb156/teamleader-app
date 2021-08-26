import $ from 'jquery';
import Swal from 'sweetalert2';
import { clienteAxios, clienteAxiosToken } from '../helpers/axios';
import { types } from '../types';

/**
 *  Obtener tiendas
 * @returns stores[]
 */
export const getStores = () => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.get('/stores');
			dispatch(stores(res.data.stores));
		} catch (error) {
			console.log(error);
		}
	};
};

const stores = (stores) => {
	return {
		type: types.getStores,
		payload: stores,
	};
};

/**
 * Registrar una tienda
 * @param store
 * @returns store
 */
export const newStore = (store) => {
	return async (dispatch) => {
		try {
			const res = await clienteAxios.post('/stores', store);
			dispatch(createStore(res.data.store));
			$('#storeModal').modal('hide');
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Tienda registrada',
				showConfirmButton: false,
				timer: 1500,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

const createStore = (store) => {
	return {
		type: types.createStore,
		payload: store,
	};
};

/**
 * Desactivar una tienda
 * @param {id} store
 * @returns
 */

export const deactivateStore = (store) => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.post(
				`/stores/deactivate/${store._id}`
			);
			dispatch(storeDeactivate(res.data.store));
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: res.data.msg,
				showConfirmButton: false,
				timer: 1500,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

const storeDeactivate = (store) => {
	return {
		type: types.deactivateStore,
		payload: store,
	};
};

/**
 *  Seleccionar la tienda a editar
 */

export const selectEditStore = (store) => {
	return async (dispatch) => {
		dispatch(selectStoreEdit(store));
	};
};

const selectStoreEdit = (store) => {
	return {
		type: types.selectEditStore,
		payload: store,
	};
};

/**
 * Edición de tienda
 */

export const editStore = (store) => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.put(`/stores/edit/${store._id}`, store);
			dispatch(storeEdit(res.data.store));
		} catch (error) {
			console.log(error);
		}
	};
};

const storeEdit = (store) => {

	return {
		type: types.editStore,
		payload: store,
	};
};


