import { Link } from 'preact-router';

const NotFound = () => (
	<div>
		<h1>Error 404: Not Found</h1>
		<Link href="/">Go to home</Link>
	</div>
);

export default NotFound;
