import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'redaction';

import { counter as action } from 'redux/actions';

import './style.css';
import { change_count__btn } from './style.module.css';

const Counter = React.memo(({ counter }) => {
	return (
		<div>
			<h1>Counter page</h1>
			<h2>
				Current: {counter} (
				<span onClick={action.increment} className={change_count__btn}>
					+
				</span>
				/
				<span onClick={action.decrement} className={change_count__btn}>
					-
				</span>
				)
			</h2>
			<h4 onClick={action.reset} className={change_count__btn}>
				Reset counter
			</h4>
			<Link to="/">Go to home</Link>
		</div>
	);
});

const enhance = connect({ counter: 'counter.counter' });

export default enhance(Counter);
