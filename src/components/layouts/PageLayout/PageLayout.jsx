import React from 'react';

import { layout } from './style.module.scss';

const Layout = ({ children }) => <div className={layout}>{children}</div>;

export default React.memo(Layout);
