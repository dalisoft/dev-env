/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// TODO: Upgrade later...?
// Currently workaround for FormattedMessage error
if (FormattedMessage.propTypes) {
  FormattedMessage.propTypes.children = PropTypes.any;
} else {
  FormattedMessage.propTypes = {
    children: PropTypes.any,
  };
}

export const Text = ({ id, ...props }) => <FormattedMessage id={id || props.children} {...props} />;

Text.propTypes = {
  children: PropTypes.any,
};

export default Text;
