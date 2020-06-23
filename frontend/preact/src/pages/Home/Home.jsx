import { h } from 'preact';
import { Link } from 'preact-router';

import { Text } from '../../components/UI';
import { LanguageSwitcher } from '../../components/common';

const Home = () => (
  <div>
    <h1>
      <Text>HOME_PAGE</Text>
    </h1>
    <LanguageSwitcher />
    <Link href="/counter">Go to counter</Link>
  </div>
);

export default Home;
