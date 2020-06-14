import Preact from 'preact';
import { layout } from './style.module.scss';

const Layout = ({ children }) => <div className={layout}>{children}</div>;

export default Layout;
