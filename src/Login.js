import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

function Login({ usuarioLogueado, setUsuarioLogueado }) {
	const history = useNavigate();
	const [usuario, setUsuario] = useState('');
	const [password, setPassword] = useState('');
	const [showError, setShowError] = useState(false);

	function submit(event) {
		event.preventDefault();
		let data = {
			usuario: usuario,
			password: password,
		};
		fetch('http://localhost:8000/usuario/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((resp) => resp.json())
			.then((res) => {
				if (res.message === 'no existe') {
					setShowError(true);
					setTimeout(() => {
						setShowError(false);
					}, 5000);
				} else if (res.message === 'logueado') {
					setUsuarioLogueado(usuario);
					history('/', { state: { id: usuario } });
				}
			});
	}

	return (
		<>
			<Alert className='alert alert-error' show={showError} variant={'danger'}>
				Los datos son erroneos.
			</Alert>
			<div className='signup'>
				<h2 className='sesion'>Iniciar Sesión</h2>

				<div className='form-group'>
					<input
						type='usuario'
						onChange={(e) => {
							setUsuario(e.target.value);
						}}
						placeholder='Usuario'
						name=''
						id=''
					/>
					<input
						type='password'
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						placeholder='Contraseña'
						name=''
						id=''
					/>
					<button type='button' onClick={submit}>
						Login
					</button>
				</div>

				<br />

				<br />
			</div>
		</>
	);
}

export default Login;
