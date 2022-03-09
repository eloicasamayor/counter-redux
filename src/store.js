import { combineReducers, createStore } from "redux";
import { counters, createCounter } from "./counters";
import { toggle } from "./toggle/toggle";
const reducer = combineReducers({ counters, toggle });
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(createCounter("entrades"));
store.dispatch(createCounter("sortides"));
store.dispatch(createCounter("snacks"));
