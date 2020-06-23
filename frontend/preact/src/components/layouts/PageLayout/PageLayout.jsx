import { h } from 'preact';
import { layout } from './style.module.css';

const Layout = ({ children }) => <div className={layout}>{children}</div>;

export default Layout;
