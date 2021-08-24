import React from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from '../../actions/employeActions';
import { getStores } from '../../actions/storeActions';
import { Employee } from './Employee';
import { EmployeesForm } from './EmployeesForm';

export const EmployeesScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getEmployees());
	}, [dispatch]);

	const handleNewUser = () => {
    dispatch(getStores());
  };

	const { employees } = useSelector((state) => state.employees);
	const { stores } = useSelector((state) => state.stores);

	return (
		<Fragment>
			<div className='card animate__animated animate__fadeIn'>
				<h5 className='card-header'>
					<i className='fas fa-users'></i> Listado de usuarios
					<span className='badge badge-secondary'></span>
					<button
						type='button'
						className='btn btn-danger float-right'
						onClick={() => handleNewUser()}
						data-toggle='modal'
						data-target='#employeeModal'>
						<i className='fa fa-plus'></i> Nuevo Usuario
					</button>
				</h5>
				<div className='card-body'>
					<div className='table-responsive-sm'>
						<table className='table table-striped'>
							<thead>
								<tr>
									<th scope='col' className='d-none d-sm-block'>
										#
									</th>
									<th scope='col'>Nombre</th>
									<th scope='col'>Email</th>
									<th scope='col'>Tienda</th>
									<th scope='col'>Permisos</th>
									<th scope='col'>Estado</th>
									<th scope='col' className='text-center'>
										Acciones
									</th>
								</tr>
							</thead>
							<tbody>
								{employees.map((employee, i) => (
									<Employee employee={employee} index={i} key={employee._id} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div
				className='modal fade'
				id='employeeModal'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
							 <i className="fa fa-user"></i>	Registro de Usuario
							</h5>
						</div>
						<div className='modal-body'>
							<EmployeesForm stores={stores.filter(store => store.active === true)} />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
