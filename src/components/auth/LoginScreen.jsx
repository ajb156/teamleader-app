import React, { useState } from 'react';
import logo from '../../Logo.png';

export const LoginScreen = () => {
	const [login, setLogin] = useState({
		email: '',
		password: '',
		remember: '',
	});

	const { email, password, remember } = login;

	const handleForm = (e) => {
		e.preventDefault();
		//setLogin();
	};

	const handleInput = () => {};

	return (
		<div className='container text-center pt-4' id='loginForm'>
			<form className='form-signin' onSubmit={handleForm}>
				<img className='mb-5' src={logo} alt='' width='72' height='72' />
				<h1 className='h3 mb-3 font-weight-normal'>Ingresa tus datos</h1>

				<input
					type='email'
					name='email'
					className='form-control'
					placeholder='Email address'
					onChange={handleInput}
					value={email}
				/>

				<input
					type='password'
					id='inputPassword'
					className='form-control'
					placeholder='Password'
					name='password'
					onChange={handleInput}
					value={password}
				/>
				<div className='checkbox mb-3'>
					<label>
						<input
							type='checkbox'
							value={remember}
							onChange={handleInput}
							name='remember'
						/>{' '}
						Recuerdame
					</label>
				</div>
				<button className='w-100 btn btn-lg btn-danger' type='submit'>
					Acceder
				</button>
				<p className='mt-5 mb-3 text-muted'>AdbWeb © 2021</p>
			</form>
		</div>
	);
};
