import { useContext } from 'react';
import CarritoContext from './context';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function Caja(props) {
	const caja = props.caja;
	const esCarrito = props.esCarrito;
	const { carrito, setCarrito } = useContext(CarritoContext);
	const [showSuccess, setShowSuccess] = useState(false);
	const tiempo = setTimeout(() => {
		setShowSuccess(false);
	}, 5000);

	function añadirProducto() {
		caja.tipo = 'caja';
		carrito.push(caja);
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
				<p className='product-title'>{caja.Nombre}</p>
				<img className='caja' alt='' src={caja.Imagen} />
				<p className='descripcion'>{caja.Descripcion}</p>
				<p className='price'>{caja.Precio}</p>
				{esCarrito ? <button onClick={() => borrarProducto(caja._id)}>Borrar</button> : ''}
				{esCarrito ? '' : <button onClick={añadirProducto}>Añadir al carrito</button>}
				{/* {esCarrito === true ? '' : <button onClick={añadirProducto}>Añadir al carrito</button>} */}
			</div>
		</>
	);
}

export default Caja;
