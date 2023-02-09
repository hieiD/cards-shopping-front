import { Link } from 'react-router-dom';
import './style.css';
function Body() {
	return (
		<>
			<div className='home-buttons home-buttons-1'>
				<Link to='/Cartas' className='link'>
					<span className='link-text'>Cartas</span>
					<img className='car' alt='' src={process.env.PUBLIC_URL + '/imagenes/cartas.png'} />
				</Link>
			</div>
			<div className='home-buttons home-buttons-2'>
				<Link to='/Cajas' className='link'>
					<img className='caj' alt='' src={process.env.PUBLIC_URL + '/imagenes/cajas.png'} />
					<span className='link-text'>Cajas</span>
				</Link>
			</div>
		</>
	);
}

export default Body;
