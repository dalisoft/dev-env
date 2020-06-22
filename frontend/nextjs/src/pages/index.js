import Link from 'next/link';

import { Text } from '../components/UI';
import { LanguageSwitcher } from '../components/common';

export default () => (
  <div>
    <h1>
      <Text>HOME_PAGE</Text>
    </h1>
    <LanguageSwitcher />
    <Link href="/counter">
      <a>Go to counter</a>
    </Link>
  </div>
);
