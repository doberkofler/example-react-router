import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router';
import Home from './Home.js';
import About from './About.js';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
