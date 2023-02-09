import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from './context';
import Alert from 'react-bootstrap/Alert';

function FormularioCompra({ usuarioLogueado }) {
	const history = useNavigate();
	let { carrito, setCarrito } = useContext(MainContext);
	let [nombre, setNombre] = useState('');
	let [apellido, setApellido] = useState('');
	let [direccion, setDireccion] = useState('');
	let [correoElectronico, setCorreoElectronico] = useState('');
	let [telefono, setTelefono] = useState(null);
	let [data, setData] = useState(null);
	const [showSuccess, setShowSuccess] = useState(false);

	function enviarDatos() {
		let data1 = data;
		carrito.forEach((product) => {
			let data2 = { id: product._id, usuarioId: usuarioLogueado };
			let dataToSend = Object.assign(data1, data2);
			fetch('http://localhost:8000/pedidos/finalizarCompra', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataToSend),
			});
		});

		setCarrito([]);
		setShowSuccess(true);
		setTimeout(() => {
			setShowSuccess(false);
			history('/');
		}, 5000);
		setNombre('');
		setApellido('');
		setDireccion('');
		setCorreoElectronico('');
		setTelefono(null);
	}

	function reinicio() {
		data = { nombre: nombre, apellido: apellido, direccion: direccion, correoElectronico: correoElectronico, telefono: telefono };
		setData(data);
	}
	return (
		<>
			<Alert className='alert alert-success' show={showSuccess} variant={'info'}>
				La compra ha sido finalizada.
			</Alert>

			<div className='formularioPadre'>
				<div className='formularioHijo'>
					<p className='formularioP'>Rellena tus datos</p>
					<div className='inputs'>
						<input
							className='input'
							type='text'
							onChange={(e) => {
								setNombre(e.target.value);
								reinicio();
							}}
							placeholder='Nombre'
						/>
					</div>
					<div className='inputs'>
						<input
							className='input'
							type='text'
							onChange={(e) => {
								setApellido(e.target.value);
								reinicio();
							}}
							placeholder='Apellido'
						/>
					</div>
					<div className='inputs'>
						<input
							className='input'
							type='text'
							onChange={(e) => {
								setDireccion(e.target.value);
								reinicio();
							}}
							placeholder='Dirección'
						/>
					</div>
					<div className='inputs'>
						<input
							className='input'
							type='text'
							onChange={(e) => {
								setCorreoElectronico(e.target.value);
								reinicio();
							}}
							placeholder='Correo electronico'
						/>
					</div>
					<div className='inputs'>
						<input
							className='input'
							type='number'
							onInput={(e) => {
								setTelefono(e.target.value);
								reinicio();
							}}
							placeholder='Telefono'
						/>
					</div>
					{
						<button className='finalizarCompra' onClick={enviarDatos}>
							Finalizar Compra
						</button>
					}
				</div>
			</div>
		</>
	);
}

export default FormularioCompra;
