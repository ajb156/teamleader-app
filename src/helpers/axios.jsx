import axios from 'axios';

// Axios peticiones sin token
const clienteAxios = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Accept: 'application/json',
	},
});

// Axios para peticiones con token
const clienteAxiosToken = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

clienteAxiosToken.interceptors.request.use(
	async (config) => {
		const token = localStorage.getItem('token') || null;
		config.headers = {
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': `${token}`,
		};
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

export { clienteAxios, clienteAxiosToken };
