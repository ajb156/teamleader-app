import React, { Fragment } from 'react';

export const DesktopScreen = () => {
	return (
		<Fragment>
			<div className='row animate__animated animate__fadeIn'>
				{/* Earnings (Monthly) Card Example */}
				<div className='col-xl-3 col-md-6 mb-4'>
					<div className='card border-left-primary shadow h-100 py-2'>
						<div className='card-body'>
							<div className='row no-gutters align-items-center'>
								<div className='col mr-2'>
									<div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
										Puntos Valor
									</div>
									<div className='h5 mb-0 font-weight-bold text-gray-800'>
										Acumulado: 450
									</div>
								</div>
								<div className='col-auto'>
									<i className='fas fa-calendar fa-2x text-gray-300' />
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Earnings (Monthly) Card Example */}
				<div className='col-xl-3 col-md-6 mb-4'>
					<div className='card border-left-success shadow h-100 py-2'>
						<div className='card-body'>
							<div className='row no-gutters align-items-center'>
								<div className='col mr-2'>
									<div className='text-xs font-weight-bold text-success text-uppercase mb-1'>
										Puntos Cartera
									</div>
									<div className='h5 mb-0 font-weight-bold text-gray-800'>
										$215,000
									</div>
								</div>
								<div className='col-auto'>
									<i className='fas fa-dollar-sign fa-2x text-gray-300' />
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Earnings (Monthly) Card Example */}
				<div className='col-xl-3 col-md-6 mb-4'>
					<div className='card border-left-info shadow h-100 py-2'>
						<div className='card-body'>
							<div className='row no-gutters align-items-center'>
								<div className='col mr-2'>
									<div className='text-xs font-weight-bold text-info text-uppercase mb-1'>
										Puntos Lowi
									</div>
									<div className='row no-gutters align-items-center'>
										<div className='col-auto'>
											<div className='h5 mb-0 mr-3 font-weight-bold text-gray-800'>
												50%
											</div>
										</div>
										<div className='col'>
											<div className='progress progress-sm mr-2'>
												<div
													className='progress-bar bg-info'
													role='progressbar'
													style={{ width: '50%' }}
													aria-valuenow={50}
													aria-valuemin={0}
													aria-valuemax={100}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className='col-auto'>
									<i className='fas fa-clipboard-list fa-2x text-gray-300' />
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Pending Requests Card Example */}
				<div className='col-xl-3 col-md-6 mb-4'>
					<div className='card border-left-warning shadow h-100 py-2'>
						<div className='card-body'>
							<div className='row no-gutters align-items-center'>
								<div className='col mr-2'>
									<div className='text-xs font-weight-bold text-warning text-uppercase mb-1'>
										puntos Excelencia
									</div>
									<div className='h5 mb-0 font-weight-bold text-gray-800'>
										18
									</div>
								</div>
								<div className='col-auto'>
									<i className='fas fa-comments fa-2x text-gray-300' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<hr />
			<div className='col-xs-8'></div>

			<div className='col-xs-4'>
				<h3 className='text-center'>Últimas Noticias</h3>
				<div className='card shadow mb-4'>
					<div className='card-header py-3'>
						<h6 className='m-0 font-weight-bold text-primary'>
							Development Approach
						</h6>
					</div>
					<div className='card-body'>
						<p>
							SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees
							in order to reduce CSS bloat and poor page performance. Custom CSS
							classNamees are used to create custom components and custom
							utility classNamees.
						</p>
						<p className='mb-0'>
							Before working with this theme, you should become familiar with
							the Bootstrap framework, especially the utility classNamees.
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
