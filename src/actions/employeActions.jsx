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
				error: <b>No se pudo registrar el usuario 🤯.</b>,
			});
			const res = await promise;
			dispatch(registerEmployee(res.data.employee));
		} catch (error) {
			console.log(error);
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
 * Seleccion de usuario a editar
 */

export const editEmployee = (employee) => {
	return async (dispatch) => {
		$('#employeeModal').modal('show');
		dispatch(employeeEdit(employee));
	};
};
const employeeEdit = (employee) => {
	return {
		type: types.employeeEdit,
		payload: employee,
	};
};

/**
 * Guardar usuario editado
 */

//TODO: Actualizar contraseña

export const saveEditUser = (id, employee) => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.put(`/users/edit/${id}`, employee);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};
};

/**
 * Desactivar / Activar empleado
 */

export const activateEmployee = (employee) => {
	return async (dispatch) => {
		try {
			const res = await clienteAxiosToken.post(
				`/users/activate/${employee._id}`
			);
			dispatch(employeeActivate(res.data.employee));
			toast.success(`${employee.name}, fue actualizado correctamente`);
		} catch (error) {
			toast.error('No se pudo actualizar el usuario');
		}
	};
};

const employeeActivate = (employee) => {
	return {
		type: types.employeeActivate,
		payload: employee,
	};
};
