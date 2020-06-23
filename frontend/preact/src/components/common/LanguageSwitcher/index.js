import { actions } from '../../../store';
import { connect } from 'unistore/preact';

import LanguageSwitcher from './LanguageSwitcher';

export default connect('locale', actions)(LanguageSwitcher);
