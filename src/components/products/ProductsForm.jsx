import React from 'react';

export const ProductsForm = () => {
	return (
    <div className="col-8 mx-auto">
		<div className='card'>
			<h5 className='card-header'>Nuevo producto</h5>
			<div className='card-body'>
				<form>
					<div className='mb-3'>
						<label htmlFor='name' className='form-label'>
							Producto:
						</label>
						<input type='text' className='form-control' name='name' />
					</div>

					<div className='form-group'>
						<label htmlFor='rol'>Bolsas:</label>
						<select className='form-control' name='rol'>
							<option>Seleccione un rol</option>
							<option value='admin'>Admin</option>
							<option value='team'>Team</option>
							<option value='leader'>Leader</option>
							<option value='manager'>Manager</option>
						</select>
					</div>
				</form>
			</div>
		</div>

    </div>
	);
};
