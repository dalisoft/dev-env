import Link from 'next/link';

import { Text } from '../components/UI';
import { LangSwitcher } from '../components/common';

export default () => (
  <div>
    <h1>
      <Text>HOME_PAGE</Text>
    </h1>
    <LangSwitcher />
    <Link href="/counter">
      <a>Go to counter</a>
    </Link>
  </div>
);
