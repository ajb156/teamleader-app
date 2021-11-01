import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFamily } from '../../actions/objetiveActions';
import { getPeriods } from '../../actions/periodActions';
import { getAllworkingDays } from '../../actions/workingDayActions';

export const ObjetiveForm = () => {
	const [objetives, setObjetives] = useState({
		period: '',
    workingDay: ''
	});

	const { period, workingDay } = objetives;
	const { families } = useSelector((state) => state.objetives);
	const { periods } = useSelector((state) => state.objetives);
	const { workingDays } = useSelector((state) => state.workingDays);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFamily());
		dispatch(getPeriods());
		dispatch(getAllworkingDays());
	}, [dispatch]);

	const handleInputs = ({ target }) => {
		setObjetives({
			...objetives,
			[target.name]: target.value,
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		console.log(objetives);
	};

	return (
		<form onSubmit={handleForm}>
			<div className='form-group row'>
				<label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
					Periodo
				</label>
				<div className='col-sm-5'>
					<select className='form-control' name='period' value={period} onChange={handleInputs}>
						<option>Selecciona un periodo</option>
						{periods.map((period) => (
							<option key={period._id} value={period._id}>
								{period.name}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className='form-group row'>
				<label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
					Jornada
				</label>
				<div className='col-sm-5'>
					<select 
            className='form-control' 
            name='workingDay'
            onChange={handleInputs}
            value={workingDay}>
						<option>Selecciona una jornada</option>
						{workingDays.map((working) => (
							<option key={working._id} value={working._id} >{working.name}</option>
						))}
					</select>
				</div>
			</div>

			{families.map((family) => (
				<div className='form-group row' key={family._id}>
					<label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
						{family.name}
					</label>
					<div className='col-sm-5'>
						<input
							type='number'
							className='form-control'
							min='0'
							name={family.name}
							onChange={handleInputs}
						/>
					</div>
				</div>
			))}

			<button type='submit' className='btn btn-danger'>
				Guardar
			</button>
		</form>
	);
};
