import React from 'react';
import { Link } from 'components/Router';

import { Text } from 'components/UI';
import { LanguageSwitcher } from 'components/common';

export default () => (
  <div>
    <h1>
      <Text>HOME_PAGE</Text>
    </h1>
    <LanguageSwitcher />
    <Link to="/counter">Go to counter</Link>
  </div>
);
