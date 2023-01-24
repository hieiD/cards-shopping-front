import { useContext, useState } from 'react';
import Caja from './Caja';
import Carta from './Carta';
import MainContext from './context';

function Carrito() {
	let { carrito, setCarrito } = useContext(MainContext);
	let [texto, setTexto] = useState('El carrito está vacío');
	function comprar() {
		carrito.forEach((product) => {
			let data = { id: product._id };
			fetch('http://localhost:8000/pedidos/comprar', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
		});

		texto = 'La compra ha sido realizada';
		setTexto(texto);
		setCarrito([]);
	}
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
			{carrito.length > 0 ? <button onClick={comprar}>Comprar</button> : <p>{texto}</p>}
			{carrito.length > 0 ? <button onClick={borrar}>Borrar</button> : ''}
		</>
	);
}

export default Carrito;
