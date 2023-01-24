import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './style.css';
import MainContext from './context';

function Header() {
	let { filtro, setFiltro } = useContext(MainContext);
	function buscar(event) {
		setFiltro(event.target.value);
	}
	return (
		<>
			<h1 className='logo'>
				<img className='logo-img' src={process.env.PUBLIC_URL + '/imagenes/dragon.png'} />
				<span>BLUEDRAGON</span>
			</h1>
			<ul className='menu'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/Cajas'>Cajas</Link>
				</li>
				<li>
					<Link to='/Cartas'>Cartas</Link>
				</li>

				<li>
					<input placeholder='Busca el producto...' onChange={buscar} />
				</li>

				<li className='carritoWrapper'>
					<Link to='/Carrito'>
						<img className='carrito' src='https://cdn-icons-png.flaticon.com/512/7090/7090661.png' />
					</Link>
				</li>
			</ul>
		</>
	);
}

export default Header;
