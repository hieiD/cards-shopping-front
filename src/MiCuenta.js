import React, { useEffect } from 'react';
import Login from './Login';
import Registro from './Registro';

function MiCuenta({ usuarioLogueado, setUsuarioLogueado }) {
	function onClickSignIn() {
		const container = document.getElementById('container');
		container.classList.remove('right-panel-active');
	}
	function onClickSignUp() {
		const container = document.getElementById('container');
		container.classList.add('right-panel-active');
	}
	return (
		<>
			<div className='account'>
				{usuarioLogueado != null && (
					<>
						<p>Bienvenido, {usuarioLogueado} ! </p>
						<button onClick={() => setUsuarioLogueado(null)}>Cerrar sesión</button>
					</>
				)}
				{usuarioLogueado == null && (
					<>
						<div>
							<div className='container' id='container'>
								<Registro />
								<Login usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
								<div className='overlay-container'>
									<div className='overlay'>
										<div className='overlay-panel overlay-left'>
											<h2>Login</h2>
											<p>Inicia sesión aquí si ya tienes una cuenta</p>
											<button className='account-button ghost mt-5' id='signIn' onClick={onClickSignIn}>
												Iniciar sesión
											</button>
										</div>
										<div className='overlay-panel overlay-right'>
											<h2>Crear cuenta</h2>
											<p>Regístrate si aún no tienes una cuenta</p>
											<button className='account-button ghost' id='signUp' onClick={onClickSignUp}>
												Registrarme
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default MiCuenta;
