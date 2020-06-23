import { h } from 'preact';
import Routes from '../routes';
import Root from './Root';
import { connect } from 'unistore/preact';

const App = ({ locale }) => (
  <Root locale={locale}>
    <Routes />
  </Root>
);

const enhance = connect('locale');

export default enhance(App);
