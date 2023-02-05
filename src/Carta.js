import { useContext } from 'react';
import CarritoContext from './context';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function Carta(props) {
	const carta = props.carta;
	const esCarrito = props.esCarrito;
	const { carrito, setCarrito } = useContext(CarritoContext);
	const [showSuccess, setShowSuccess] = useState(false);
	const tiempo = setTimeout(() => {
		setShowSuccess(false);
	}, 5000);

	function añadirProducto() {
		carta.tipo = 'carta';
		carrito.push(carta);
		setCarrito([...carrito]);
		setShowSuccess(true);
		clearTimeout(tiempo);
	}

	function borrarProducto(id) {
		const index = carrito.findIndex((producto) => id === producto._id);
		carrito.splice(index, 1);
		setCarrito([...carrito]);
	}

	return (
		<>
			<Alert className='alert alert-success' show={showSuccess} variant={'info'}>
				Producto añadido al carrito.
			</Alert>
			<div className='producto'>
				<p className='product-title'>{carta.Nombre}</p>
				<img className='carta' alt='' src={carta.Imagen} />
				<p>{carta.Rareza}</p>
				<p className='price'>{carta.Precio}</p>
				{esCarrito ? <button onClick={() => borrarProducto(carta._id)}>Borrar</button> : ''}
				{esCarrito ? '' : <button onClick={añadirProducto}>Añadir al carrito</button>}
			</div>
		</>
	);
}

export default Carta;
