import React, { useEffect } from 'react';
import Login from './Login';
import Registro from './Registro';

function MiCuenta({ usuarioLogueado, setUsuarioLogueado }) {
	return (
		<>
			<div className='account'>
				{usuarioLogueado != null && (
					<>
						<p>Bienvenido, {usuarioLogueado} ! </p>
						<button onClick={() => setUsuarioLogueado(null)}>Cerrar sesión</button>
					</>
				)}

				{usuarioLogueado == null && <Registro />}
				{usuarioLogueado == null && <Login usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />}
			</div>
		</>
	);
}

export default MiCuenta;
