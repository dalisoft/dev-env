import { IntlProvider } from './IntlProvider';

const Root = ({ locale, children }) => (
  <IntlProvider locale={locale}>{children}</IntlProvider>
);

export default Root;
