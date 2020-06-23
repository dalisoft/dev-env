import { connect } from "redaction"

import LanguageSwitcher from "./LanguageSwitcher"

export default connect({ locale: "init.locale" })(LanguageSwitcher)
