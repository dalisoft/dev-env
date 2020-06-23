import intl from "intl"
import React from "react"
import { Provider } from "react-redux"
import { connect } from "redaction"
import { store } from "./store"
import { IntlProvider } from "./IntlProvider"

global.Intl = intl // polyfill for ios 9

const LanguageProvider = connect({
  locale: "init.locale",
})(({ locale, children }) => (
  <IntlProvider locale={locale}>{children}</IntlProvider>
))

export default ({ element }) => (
  <Provider store={store}>
    <LanguageProvider>{element}</LanguageProvider>
  </Provider>
)
