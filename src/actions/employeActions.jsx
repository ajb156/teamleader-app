import $ from 'jquery';
import toast from 'react-hot-toast';
import { clienteAxiosToken } from '../helpers/axios';
import { types } from '../types';

// obtener los empleados

export const getEmployees = () => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.get('/users');
			dispatch(employeesGet(res.data.employees));
		} catch (error) {
			console.log(error);
		}
	};
};

const employeesGet = (employees) => {
	return {
		type: types.employeesGet,
		payload: employees,
	};
};

/**
 *  Registro de un usuario
*/ 
export const employeeRegister = (employee) => {
	return async (dispatch) => {
		try {			
      $('#employeeModal').modal('hide');
			const promise = clienteAxiosToken.post('/users/register', employee);
			toast.promise(promise, {
				loading: 'Registrando usuario ⏳',
				success: <b>Usuario registrado 🔥!</b>,
				error: <b>No se pudo registrar el usuario 🤯.</b>
			})
			const res = await promise;
			dispatch(registerEmployee(res.data.employee));
		} catch (error) {
			console.log(error)
		}
	};
};

const registerEmployee = (employee) => {
	return {
		type: types.employeeRegister,
		payload: employee,
	};
};

/**
 * Edición de usuario
 */

export const editEmployee = () => {
	return async(dispatch) => {
		$('#employeeModal').modal('show');
	}
}
