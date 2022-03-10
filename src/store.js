import { combineReducers, createStore } from "redux";
import { counters, createCounter } from "./counters";
import { toggles, createToggle } from "./toggles/toggles";
const reducer = combineReducers({ counters, toggles });
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(createCounter("entrades"));
store.dispatch(createCounter("sortides"));
store.dispatch(createCounter("snacks"));

store.dispatch(createToggle("toggle-01"));
store.dispatch(createToggle("toggle-02"));
