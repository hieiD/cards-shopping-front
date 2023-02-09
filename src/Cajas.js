import './App.css';
import { useState, useEffect, useContext } from 'react';
import Caja from './Caja';
import MainContext from './context';

function Cajas() {
	let [cajas, setCajas] = useState(null);
	let [filtro, setFiltro] = useState('');

	let url = 'http://localhost:8000/cajas';

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((res) => {
				setCajas(res);
			});
	}, []);

	function buscar(event) {
		setFiltro(event.target.value);
	}

	return (
		<>
			<input className='buscador' placeholder='Busca el producto...' onChange={buscar} />
			<div className='cajas'>
				{cajas !== null ? (
					cajas
						.filter((caja) => caja.Nombre.toLowerCase().includes(filtro.toLowerCase()))
						.map((caja) => {
							return <Caja caja={caja} key={caja._id} />;
						})
				) : (
					<></>
				)}
			</div>
		</>
	);
}
export default Cajas;
