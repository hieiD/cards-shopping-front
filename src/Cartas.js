import './App.css';
import { useState, useEffect, useContext } from 'react';
import Carta from './Carta';
import MainContext from './context';

function Cartas() {
	let [cartas, setCartas] = useState(null);
	let { filtro, setFiltro } = useContext(MainContext);

	let url = 'http://localhost:8000/cartas';

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((res) => {
				setCartas(res);
			});
	}, []);

	function buscar(event) {
		setFiltro(event.target.value);
	}

	return (
		<>
			<input className='buscador' placeholder='Busca el producto...' onChange={buscar} />
			<div className='cartas'>
				{cartas !== null ? (
					cartas
						.filter((carta) => carta.Nombre.toLowerCase().includes(filtro.toLowerCase()))
						.map((carta) => {
							return <Carta carta={carta} key={carta._id} />;
						})
				) : (
					<></>
				)}
			</div>
		</>
	);
}
export default Cartas;
