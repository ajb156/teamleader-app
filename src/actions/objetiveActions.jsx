import toast from 'react-hot-toast';
import $ from 'jquery';
import { clienteAxiosToken } from '../helpers/axios';
import { types } from '../types';

// Obtener todas las familias de objetivos
export const getFamily = () => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.get('/objetive-families');
			dispatch(familyGet(res.data.families));
		} catch (error) {
			console.log(error);
		}
	};
};

// Accion para obtener las familias
const familyGet = (families) => {
	return {
		type: types.ObjetiveFamily,
		payload: families,
	};
};

// Crear una nueva familia
export const createFamily = (family) => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.post('/objetive-families', family);
			toast.success('Familia registrada correctamente');
      $('#objetiveFamilyModal').modal('hide');
			dispatch(familyCreate(res.data.family));
		} catch (error) {
			toast.error('No se pudo registar')
		}
	};
};

const familyCreate = (family) => {
	return {
		type: types.ObjetiveFamilyCreate,
		payload: family,
	};
};
