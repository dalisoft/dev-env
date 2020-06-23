import { h } from 'preact';
import { Link } from 'preact-router';
import { connect } from 'unistore/preact';

import { Text } from '../../components/UI';
import { LanguageSwitcher } from '../../components/common';

import { actions } from '../../store';

import './style.css';
import style from './style.module.css';

const Counter = ({ counter, ...actions }) => (
  <div>
    <h1>
      <Text>COUNTER_PAGE</Text>
    </h1>
    <h2>
      Current: {counter} (
      <span onClick={actions.increment} className={style['change-count--btn']}>
        +
      </span>
      /
      <span onClick={actions.decrement} className={style['change-count--btn']}>
        -
      </span>
      )
    </h2>
    <h4 onClick={actions.reset} className={style['change-count--btn']}>
      Reset counter
    </h4>
    <LanguageSwitcher />
    <Link href="/">Go to home</Link>
  </div>
);

const enhance = connect('counter', actions);

export default enhance(Counter);
