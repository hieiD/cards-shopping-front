import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ usuarioLogueado, setUsuarioLogueado }) {
	const history = useNavigate();
	const [usuario, setUsuario] = useState('');
	const [password, setPassword] = useState('');

	// AXIOS
	// async function submit(e) {
	// 	e.preventDefault();

	// 	try {
	// 		await axios
	// 			.post('http://localhost:8000/usuario/Conectarse', {
	// 				usuario,
	// 				password,
	// 			})
	// 			.then((res) => {
	// 				if (res.data === 'no existe') {
	// 					history('/MiCuenta', { state: { id: usuario } });
	// 				} else if (res.data === 'logueado') {
	// 					history('/', { state: { id: usuario } });
	// 				}
	// 			})
	// 			.catch((e) => {
	// 				console.log(e);
	// 			});
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// }

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
					// TODO alerta de error con mensaje "Los datos son erróneos"
				} else if (res.message === 'logueado') {
					setUsuarioLogueado(usuario);
					history('/', { state: { id: usuario } });
				}
			});
	}

	return (
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
	);
}

export default Login;
