import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/esm/react-router-dom.js';
import { connect } from 'redaction';

import { Text } from '../../components/UI';
import { LangSwitcher } from '../../components/common';

import { counter as action } from '../../redux/actions';

import './style.css';
import style from './style.module.css';

const Counter = React.memo(({ counter }) => {
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
      <LangSwitcher />
      <Link to="/">Go to home</Link>
    </div>
  );
});

Counter.displayName = 'Counter';
Counter.propTypes = {
  counter: PropTypes.number
};

const enhance = connect({ counter: 'counter.counter' });

export default enhance(Counter);
