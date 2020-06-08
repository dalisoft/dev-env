import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.scss';

const Layout = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

Layout.propTypes = {
  children: PropTypes.any
};

export default React.memo(Layout);
