import { createStore, combineReducers } from "redaction"
import { batchedSubscribe } from "redux-batched-subscribe"
import { unstable_batchedUpdates } from "react-dom"
import { reducer as form } from "redux-form"
import reducers from "./_reducers"

if (typeof document === "undefined") {
  global.window = {} // Fix for react-static window env
}

export const store = createStore({
  initialState:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  reducers: {
    ...combineReducers(reducers),
    form,
  },
  enhancers: [batchedSubscribe(unstable_batchedUpdates)],
})
