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


export const deleteStore = (store) => {
	return async(dispatch) => {
		try {
			const res = await clienteAxiosToken.delete(`/stores/delete/${store._id}`);
			console.log(res)
		} catch (error) {
			console.log(error)
		}
	}
}