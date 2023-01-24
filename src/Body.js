import { Link } from 'react-router-dom';
import './style.css';
function Body() {
	return (
		<>
			<ul className='home-buttons'>
				<li>
					<Link to='/Cartas' className='link'>
						<span className='link-text'>Cartas</span>
						<img className='car' alt='' src={process.env.PUBLIC_URL + '/imagenes/cartas.png'} />
					</Link>
				</li>
				<li>
					<Link to='/Cajas' className='link'>
						<span className='link-text'>Cajas</span>
						<img className='caj' alt='' src={process.env.PUBLIC_URL + '/imagenes/cajas.png'} />
					</Link>
				</li>
			</ul>
		</>
	);
}

export default Body;
