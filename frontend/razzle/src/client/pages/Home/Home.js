import React from 'react';
import { Link } from 'react-router-dom';

import { Text } from '../../components/UI';
import { LanguageSwitcher } from '../../components/common';

const Home = () => (
  <div>
    <h1>
      <Text>HOME_PAGE</Text>
    </h1>
    <LanguageSwitcher />
    <Link to="/counter">Go to counter</Link>
  </div>
);

export default Home;
