import './App.css';
import Navbar from './component/Navbar';

import Landing from './pages/Landing';
import Colourfull from './pages/Colorfull';
import Grayfull from './pages/Grayfull';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/colourfull" element={<Colourfull />} />
				<Route path="/grayfull" element={<Grayfull />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
