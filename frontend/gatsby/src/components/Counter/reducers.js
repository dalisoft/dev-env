import * as commonReducers from "helpers/commonReducers"

import { counter } from "redux/rest"

const initialState = {
  counter: counter.getInitialValue(),
}

const increment = ({ counter, ...state }) => ({
  ...state,
  counter: counter + 1,
})
const decrement = ({ counter, ...state }) => ({
  ...state,
  counter: counter - 1,
})
const reset = (state) => ({ ...state, counter: 0 })

export default {
  initialState,
  increment,
  decrement,
  reset,
  ...commonReducers,
}
