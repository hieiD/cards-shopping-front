import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Conectarse() {
	const history = useNavigate();

	const [usuario, setUsuario] = useState('');
	const [password, setPassword] = useState('');

	async function submit(e) {
		e.preventDefault();

		try {
			await axios
				.post('http://localhost:8000/usuario/Conectarse', {
					usuario,
					password,
				})
				.then((res) => {
					if (res.data === 'no existe') {
						history('/MiCuenta', { state: { id: usuario } });
					} else if (res.data === 'logueado') {
						history('/', { state: { id: usuario } });
					}
				})
				.catch((e) => {
					console.log(e);
				});
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<div className='signup'>
			<h2 className='sesion'>Iniciar Sesión</h2>

			<form action='POST'>
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
				<input type='submit' onClick={submit} />
			</form>

			<br />

			<br />
		</div>
	);
}

export default Conectarse;
