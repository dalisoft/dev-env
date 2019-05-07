import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export const Text = ({ id, ...props }) => <FormattedMessage id={id || props.children} {...props} />;

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default React.memo(Text);
