import { Link } from 'react-router-dom';
import './style.css';

function Header() {
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
				<li className='carritoWrapper'>
					<Link to='/Carrito'>
						<img className='carrito' alt='' src='https://cdn-icons-png.flaticon.com/512/7090/7090661.png' />
					</Link>
				</li>
				<li className='usuarioWrapper'>
					<Link to='/MiCuenta'>
						<img className='usuarioImg' alt='' src='https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png' />
					</Link>
				</li>
			</ul>
		</>
	);
}

export default Header;
