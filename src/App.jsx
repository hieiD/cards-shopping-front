import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cajas from './Cajas';
import Cartas from './Cartas';
import Header from './Header';
import Home from './Home';
import Carrito from './Carrito';
import MiCuenta from './MiCuenta';
import { useState } from 'react';
import MainContext from './context';

function App() {
	let [carrito, setCarrito] = useState([]);
	let [filtro, setFiltro] = useState('');
	let [usuarioLogueado, setUsuarioLogueado] = useState(null);
	return (
		<MainContext.Provider value={{ carrito, setCarrito, filtro, setFiltro }}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/MiCuenta' element={<MiCuenta usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />} />
					<Route path='/Cajas' element={<Cajas />} />
					<Route path='/Cartas' element={<Cartas />} />
					<Route path='/Carrito' element={<Carrito usuarioLogueado={usuarioLogueado} />} />
				</Routes>
			</BrowserRouter>
		</MainContext.Provider>
	);
}

export default App;
