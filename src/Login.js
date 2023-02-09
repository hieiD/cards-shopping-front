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
		if (!!usuario && !!password) {
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
		} else {
			setShowError(true);
			setTimeout(() => {
				setShowError(false);
			}, 5000);
		}
	}

	return (
		<>
			<Alert className='alert alert-error' show={showError} variant={'danger'}>
				Los datos son erroneos.
			</Alert>
			<div className='form-container sign-in-container'>
				<form action='#'>
					<h2>Iniciar Sesión</h2>
					<label>
						<input
							className='usuario1'
							type='text'
							onChange={(e) => {
								setUsuario(e.target.value);
							}}
							placeholder='Usuario'
						/>
					</label>
					<label>
						<input
							className='usuario2'
							type='password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							placeholder='Contraseña'
						/>
					</label>
					<button className='account-button loginbuton' type='button' onClick={submit}>
						Login
					</button>
				</form>
			</div>
		</>
	);
}

export default Login;
