import axios from 'axios';

// Axios peticiones sin token
const clienteAxios = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	headers: {
		Accept: 'application/json',
	},
});

export { clienteAxios };
