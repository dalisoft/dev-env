import React from 'react';
import PropTypes from 'prop-types';

import { layout } from './style.module.scss';

const PageLayout = ({ children, style }) => (
  <div className={layout} style={style}>
    {children}
  </div>
);
PageLayout.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

export default React.memo(PageLayout);
