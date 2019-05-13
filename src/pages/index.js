import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'redaction';

import { Text } from 'components/UI';
import { LangSwitcher } from 'components/common';

const enhance = connect((state) => state);

export default enhance(() => (
  <div>
    <h1>
      <Text>HOME_PAGE</Text>
    </h1>
    <LangSwitcher />
    <Link to="/counter">Go to counter</Link>
  </div>
));
