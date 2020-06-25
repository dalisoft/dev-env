import React from 'react';
import { Link } from 'react-router-dom/esm/react-router-dom.js';

const NotFound = () => (
  <div>
    <h1>Error 404: Not Found</h1>
    <Link to="/">Go to home</Link>
  </div>
);

export default NotFound;
