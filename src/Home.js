import { useState } from 'react';
import Body from './Body';
import Footer from './Footer';
import Alert from 'react-bootstrap/Alert';

function Home() {
	const [correo, setCorreo] = useState('');
	const [showSuccess, setShowSuccess] = useState(false);
	const [showError, setShowError] = useState(false);

	function correoElectronico() {
		const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
		if (correo && correo.length && correo.match(isValidEmail)) {
			let data = { correo: correo };
			fetch('http://localhost:8000/correo/suscribir', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
				.then((resp) => resp.json())
				.then((res) => {
					if (res.message === 'existe') {
						setShowError(true);
						setTimeout(() => {
							setShowError(false);
						}, 5000);
					} else if (res.message === 'correoRegistrado') {
						setShowSuccess(true);
						setTimeout(() => {
							setShowSuccess(false);
						}, 5000);
					}
				});
		}
	}

	return (
		<>
			<Alert className='alert alert-success' show={showSuccess} variant={'success'}>
				Correo registrado correctamente.
			</Alert>
			<Alert className='alert alert-error' show={showError} variant={'danger'}>
				Ya existe este correo o ha ocurrido un error.
			</Alert>
			<div className='padre'>
				<div className='hijo1'>
					<div className='hijo2'>
						<h2 className='homeTitulo'>Empieza a coleccionar cartas de yu-gi-oh con bluedragon</h2>
					</div>
					<div>
						<p>Registra tu correo para ser el primero en enterarte de nuestras últimas novedades y promociones</p>
						<input
							className='escribirEmail'
							type='email'
							placeholder='escribe tu email'
							onChange={(e) => {
								setCorreo(e.target.value);
							}}
						/>
						<button className='enviarEmail' onClick={correoElectronico}>
							Enviar
						</button>
					</div>
					<div className='review'>
						<img className='randomUser' src='http://expopremium.com.br/wp-content/uploads/2016/05/vitor-perfil.png' /> <p>"El envío ha sido super rápido y las cartas estan a buen precio"</p>
					</div>
				</div>
				<section>
					<img src='/imagenes/1.jpg' />
					<img src='/imagenes/2.jpg' />
					<img src='/imagenes/3.jpg' />
					<img src='/imagenes/4.jpg' />
					<img src='/imagenes/5.jpg' />
				</section>
			</div>

			<Body />
		</>
	);
}

export default Home;
