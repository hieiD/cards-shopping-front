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
			<div className='carritoMaster'>
				<div className='botonesCarrito'>
					<div>
						{carrito.length > 0 ? (
							<Link to='/FormularioCompra'>
								<button className='botonComprar'>Comprar</button>
							</Link>
						) : (
							<p>{texto}</p>
						)}
					</div>
					<div>
						{carrito.length > 0 ? (
							<button className='botonVaciar' onClick={borrar}>
								Vaciar Carrito
							</button>
						) : (
							''
						)}
					</div>
				</div>

				<div>
					<ul className='productosCarrito'>
						{carrito.map((producto) => (
							<li>{producto.tipo === 'caja' ? <Caja caja={producto} esCarrito={true} /> : <Carta carta={producto} esCarrito={true} />}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Carrito;
