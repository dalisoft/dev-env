import React from 'react';
import { Link } from '@reach/router';

import { Text } from 'components/UI';
import { LangSwitcher } from 'components/common';

const Home = () => (
  <div>
    <h1>
      <Text>HOME_PAGE</Text>
    </h1>
    <LangSwitcher />
    <Link to="/counter">Go to counter</Link>
  </div>
);

export default Home;
