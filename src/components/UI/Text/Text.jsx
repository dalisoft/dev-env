import React from 'react';
import { FormattedMessage } from 'react-intl';

export const Text = ({ id, children }) => (
	<FormattedMessage id={id || (typeof children === 'function' ? children() : children)}>
		{typeof children === 'function' ? children : () => children}
	</FormattedMessage>
);

export default Text;
