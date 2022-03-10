import { Provider } from "react-redux";
import { store } from "./store";
import { ListCounters } from "./counters";
import { AllReduxJson } from "./allJsonRedux/AllReduxJson";

import { ListToggles } from "./toggles/ListToggles";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>Learning redux</h1>
      <div className="app">
        <Provider store={store}>
          <div className="all-states">
            <ListCounters />
            <ListToggles />
          </div>
          <AllReduxJson />
        </Provider>
      </div>
    </>
  );
}
