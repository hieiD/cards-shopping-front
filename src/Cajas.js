import './App.css';
import { useState, useEffect } from 'react';
import Caja from './Caja';

function Cajas() {
	let [cajas, setCajas] = useState(null);

	let url = 'http://localhost:8000/cajas';

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((res) => {
				setCajas(res);
			});
	}, []);

	return (
		<>
			<div className='cajas'>
				{cajas !== null ? (
					cajas.map((caja) => {
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
