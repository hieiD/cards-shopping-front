import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Registro = () => {
	// const history = useNavigate();
	const [usuario, setUsuario] = useState('');
	const [password, setPassword] = useState('');
	const [showSuccess, setShowSuccess] = useState(false);
	const [showError, setShowError] = useState(false);

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
				if (res.message === 'existe') {
					setShowError(true);
					setTimeout(() => {
						setShowError(false);
					}, 5000);
				} else if (res.message === 'registrado') {
					setShowSuccess(true);
					setTimeout(() => {
						setShowSuccess(false);
					}, 5000);
				}
			});
	}

	return (
		<>
			<Alert className='alert alert-success' show={showSuccess} variant={'success'}>
				Usuario registrado correctamente.
			</Alert>
			<Alert className='alert alert-error' show={showError} variant={'danger'}>
				Ya existe este usuario o ha ocurrido un error.
			</Alert>
			<div className='form-container sign-up-container'>
				<form action='#'>
					<h2>Registrarse</h2>
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
					<button className='account-button' type='button' onClick={submit}>
						Registrarme
					</button>
				</form>
			</div>
		</>
	);
};

export default Registro;
