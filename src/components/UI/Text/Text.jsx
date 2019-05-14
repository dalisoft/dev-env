import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'redaction';

// TODO: Upgrade later...?
// Currently workaround for FormattedMessage error
FormattedMessage.propTypes = {
  children: PropTypes.string,
};

export const Text = ({ id, ...props }) => <FormattedMessage id={id || props.children} {...props} />;

Text.propTypes = {
  children: PropTypes.string,
};

const enhance = connect({ locale: 'init.locale' });

export default enhance(Text);
