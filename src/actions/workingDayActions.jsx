import toast from 'react-hot-toast';
import $ from 'jquery';
import { clienteAxiosToken } from '../helpers/axios';
import { types } from '../types';
import { dispatch } from 'react-hot-toast/dist/core/store';

/**
 * Registrar una jornada
 * @returns jornada
 */
export const createWorkingDay = (workingday) => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.post('/workingday', workingday);
			$('#workingDayModal').modal('hide');
			dispatch(workingDayCreate(res.data.workingDay));
			toast.success(`${res.data.msg}`);
		} catch (error) {
			toast.error('Hubo un error, no se pudo registrar');
		}
	};
};

// Accion para registar la jornada
const workingDayCreate = (workingDay) => {
	return {
		type: types.workingDayRegister,
		payload: workingDay,
	};
};

/**
 * Obtener todas las jornadas
 */
export const getAllworkingDays = () => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.get('/workingday');
			dispatch(allWorkingDays(res.data.workingDays));
		} catch (error) {}
	};
};

// Accion para obtener todas las jornadas
const allWorkingDays = (workingDays) => {
	return {
		type: types.workingDayGet,
		payload: workingDays,
	};
};

/**
 * Editar una jornada
 */
export const selectWorkingDay = (workingDay) => {
	return async (dispatch) => {
		try {
			$('#workingDayModal').modal('show');
			dispatch(workingDaySelect(workingDay));
		} catch (error) {}
	};
};

// Accion para seleccionar una jornada
const workingDaySelect = (workingDay) => {
	return {
		type: types.workingDaySelect,
		payload: workingDay,
	};
};

export const activateWorkingDay = () => {
	return async(dispatch) =>  {

	
	}
}
