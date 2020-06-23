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
import { actions } from '../../../store';
import { connect } from 'unistore/preact';
import LanguageSwitcher from './LanguageSwitcher';

const WrappedLanguageSwitcher = connect('locale', actions)(LanguageSwitcher);

<WrappedLanguageSwitcher {...actions} />;
```
