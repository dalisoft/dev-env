import Link from 'next/link';
import { connect } from 'redaction';

import { Text } from '../UI';
import { LanguageSwitcher } from '../common';

import { counter as action } from '../../redux/actions';

import style from './style.module.scss';

const Counter = ({ counter }) => {
  return (
    <div>
      <h1>
        <Text>COUNTER_PAGE</Text>
      </h1>
      <h2>
        Current: {counter} (
        <span onClick={action.increment} className={style['change-count--btn']}>
          +
        </span>
        /
        <span onClick={action.decrement} className={style['change-count--btn']}>
          -
        </span>
        )
      </h2>
      <h4 onClick={action.reset} className={style['change-count--btn']}>
        Reset counter
      </h4>
      <LanguageSwitcher />
      <Link href="/">
        <a>Go to home</a>
      </Link>
    </div>
  );
};

const enhance = connect({ counter: 'counter.counter' });

export default enhance(Counter);
