import React from 'react';
import Login from './Login';
import Registro from './Registro';

function MiCuenta() {
	return (
		<>
			<div className='account'>
				<Registro />
				<Login />
			</div>
		</>
	);
}

export default MiCuenta;
