import React from 'react';

export const DesktopBags = ({ bag }) => {

  console.log(bag)
	return (
		<div className='col-xl-3 col-md-6 mb-4 mx-auto'>
			<div className='card border-danger shadow h-100 py-2'>
				<div className='card-body'>
					<div className='row no-gutters align-items-center'>
						<div className='col mr-2'>
							<div className='text-xs font-weight-bold text-danger text-uppercase mb-1 text-center'>
								{bag.name}
							</div>
							<div className='h7 mb-0 font-weight-bold text-gray-800 text-uppercase text-center'>
								Acumulado: 450
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
