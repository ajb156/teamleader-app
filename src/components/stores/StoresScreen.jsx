import React, { Fragment } from 'react';

export const StoresScreen = () => {
	return (
		<Fragment>
			<div className='card'>
				<div className='card-header'>
					<i className='fas fa-store-alt '></i> Listado de Tiendas
					<span className='badge badge-secondary'></span>
					<button
						type='button'
						className='btn btn-danger float-end'
						data-bs-toggle='modal'
						data-bs-target='#storeModal'>
						<i className='fa fa-plus'></i> Nueva Tienda
					</button>
				</div>
				<div className='card-body'>
					<h5 className='card-title'>Special title treatment</h5>
					<p className='card-text'>
						With supporting text below as a natural lead-in to additional
						content.
					</p>
				</div>
			</div>

			<div
				className='modal fade'
				id='storeModal'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
							Nueva Tienda
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						<div className='modal-body'>...</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'>
								Cerrar
							</button>
							<button type='button' className='btn btn-danger'>
								Guardar
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
