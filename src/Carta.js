import { useContext } from 'react';
import CarritoContext from './context';

function Carta(props) {
	const carta = props.carta;
	const esCarrito = props.esCarrito;
	const { carrito, setCarrito } = useContext(CarritoContext);

	function añadirProducto() {
		carta.tipo = 'carta';
		carrito.push(carta);
		setCarrito([...carrito]);
	}

	function borrarProducto(id) {
		const index = carrito.findIndex((producto) => id === producto._id);
		carrito.splice(index, 1);
		setCarrito([...carrito]);
	}

	return (
		<div className='producto'>
			<p className='product-title'>{carta.Nombre}</p>
			<img className='carta' alt='' src={carta.Imagen} />
			<p>{carta.Rareza}</p>
			<p className='price'>{carta.Precio}</p>
			{esCarrito ? <button onClick={() => borrarProducto(carta._id)}>Borrar</button> : ''}
			{esCarrito ? '' : <button onClick={añadirProducto}>Añadir al carrito</button>}
		</div>
	);
}

export default Carta;
