import React from 'react';
import Link from 'next/link';

const NotFound = () => (
  <div>
    <h1>Error 404: Not Found</h1>
    <Link href="/">
      <a>Go to home</a>
    </Link>
  </div>
);

export default NotFound;
