import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/authActions';
import logo from '../../Logo.png';

export const LoginScreen = () => {
	const [credential, setCredential] = useState({
		email: 'ajblanco156@gmail.com',
		password: 'Ablanco156*',
		remember: '',
	});

	const dispatch = useDispatch();

	const { email, password, remember } = credential;

	const handleForm = (e) => {
		e.preventDefault();
		dispatch(startLogin(credential));
	};

	const handleInput = (e) => {
		setCredential({
			...credential,
			[e.target.name]: e.target.value,
		});
	};

	const formOk = () => {
		return email.length > 0 && password.length > 0 ? true : false;
	};

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
				<button className='w-100 btn btn-lg btn-danger' disabled={!formOk()} type='submit'>
					Acceder
				</button>
				<p className='mt-5 mb-3 text-muted'>AdbWeb © 2021</p>
			</form>
		</div>
	);
};
