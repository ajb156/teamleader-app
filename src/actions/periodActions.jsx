import toast from 'react-hot-toast';
import { clienteAxiosToken } from '../helpers/axios';
import { types } from '../types';

export const createPeriod = (period) => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.post('/periods', period);
			dispatch(periodCreate(res.data.period));
		} catch (error) {
			console.log(error)
			toast.error('No se pudo registar el periodo');
		}
	};
};

const periodCreate = (period) => {
	return {
		type: types.PeriodCreate,
		payload: period,
	};
};

export const getPeriods = () => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.get('/periods');
			dispatch(periodsGet(res.data.periods));
		} catch (error) {
			toast.error('No se pueden obtener los periodos');
		}
	};
};

const periodsGet = (periods) => {
	return {
		type: types.PeriodGet,
		payload: periods,
	};
};
