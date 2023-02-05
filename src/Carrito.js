import { useContext, useState } from 'react';
import Caja from './Caja';
import Carta from './Carta';
import MainContext from './context';
import { Link } from 'react-router-dom';

function Carrito({ usuarioLogueado }) {
	let { carrito, setCarrito } = useContext(MainContext);
	let [texto, setTexto] = useState('El carrito está vacío');
	function borrar() {
		setCarrito([]);
	}
	return (
		<>
			<ul>
				{carrito.map((producto) => (
					<li>{producto.tipo === 'caja' ? <Caja caja={producto} esCarrito={true} /> : <Carta carta={producto} esCarrito={true} />}</li>
				))}
			</ul>
			{carrito.length > 0 ? (
				<Link to='/FormularioCompra'>
					<button>Comprar</button>
				</Link>
			) : (
				<p>{texto}</p>
			)}
			{carrito.length > 0 ? <button onClick={borrar}>Borrar</button> : ''}
		</>
	);
}

export default Carrito;
