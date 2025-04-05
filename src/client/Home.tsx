import React from 'react';
import {Link} from 'react-router';

function Home() {
	return (
		<div>
			<h1>Home Page</h1>
			<p>Welcome to the home page!</p>
			<Link to="/about">Go to About Page</Link>
		</div>
	);
}

export default Home;
