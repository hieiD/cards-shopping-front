import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
	const history = useNavigate();

	const [usuario, setUsuario] = useState('');
	const [password, setPassword] = useState('');

	// AXIOS
	// async function submit(e) {
	// 	e.preventDefault();

	// 	try {
	// 		await axios
	// 			.post('http://localhost:8000/usuario/Registrarse', {
	// 				usuario,
	// 				password,
	// 			})
	// 			.then((res) => {
	// 				if (res.data === 'existe') {
	// 					alert('El usuario ya existe');
	// 				} else if (res.data === 'registrado') {
	// 					alert('El usuario ha sido registrado con éxito');
	// 					history('/PaginaLogin', { state: { id: usuario } });
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
		fetch('http://localhost:8000/usuario/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
				if (res.message === 'existe') {
					alert('El usuario ya existe');
				} else if (res.message === 'registrado') {
					alert('El usuario ha sido registrado con éxito');
					history('/MiCuenta', { state: { id: usuario } });
				}
			});
	}

	return (
		<div className='login'>
			<h2 className='sesion'>Registrarse</h2>

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
					Registrarme
				</button>
			</div>

			<br />

			<br />
		</div>
	);
};

export default Registro;
