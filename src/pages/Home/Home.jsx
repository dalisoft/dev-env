import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
	<div>
		<h1>Home page</h1>
		<Link to="/counter">Go to counter</Link>
	</div>
);

export default Home;
