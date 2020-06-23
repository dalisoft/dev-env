## No-select

```jsx default
<LanguageSwitcher />
```

## Selected language

```jsx { "props": { "locale": "ru" } }
<LanguageSwitcher locale="ru" />
```

## Wrap-to-Connect

```jsx
import { connect } from "redaction"
import LanguageSwitcher from "./LanguageSwitcher"
const WrappedLanguageSwitcher = connect({ locale: "init.locale" })(
  LanguageSwitcher
)

;<WrappedLanguageSwitcher />
```
