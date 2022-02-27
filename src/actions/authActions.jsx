import { clienteAxios, clienteAxiosToken } from '../helpers/axios';
import { types } from '../types';
import Swal from 'sweetalert2';

export const startLogin = (credentials) => {
	return async (dispatch) => {
		try {
			const res = await clienteAxios.post('/auth/login', credentials);
			console.log(res);
			localStorage.setItem('token', res.data.token);
			dispatch(login(res.data.user));
		} catch (error) {
			Swal.fire({
				position: 'top-end',
				icon: 'error',
				title: 'Hubo un error al autenticar',
				showConfirmButton: false,
				timer: 1500,
			});
		}
	};
};

const login = (user) => {
	return {
		type: types.userLogin,
		payload: user,
	};
};

export const checkToken = () => {
	const token = localStorage.getItem('token');
	// Si no tenemos token
	if (!token) {
		return (dispatch) => {
			dispatch(invalidToken());
		};
	} else {
		return async (dispatch) => {
			const res = await clienteAxiosToken.get('/renew');
			localStorage.setItem('token', res.data.token);
			dispatch(renewToken(res.data.user));
		};
	}
};

const invalidToken = () => {
	return {
		type: types.checkLogin,
	};
};

const renewToken = (user) => {
	return {
		type: types.renewToken,
		payload: user,
	};
};

export const startLogout = () => {
	localStorage.removeItem('token');
	return async (dispatch) => {
		try {
			dispatch(logout())
		} catch (error) {
			console.log(error)
		}
	};
};

const logout = () => {
	return {
		type: types.userLogout,
	};
};
