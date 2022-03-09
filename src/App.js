import { Provider } from "react-redux";
import { store } from "./store";
import { ListCounters } from "./counters";
import { ToggleRedux } from "./toggle/ToggleRedux";
import { AllReduxJson } from "./allJsonRedux/AllReduxJson";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>Learning redux</h1>
      <div className="app">
        <Provider store={store}>
          <div className="all-states">
            <ListCounters />
            <ToggleRedux />
          </div>
          <AllReduxJson />
        </Provider>
      </div>
    </>
  );
}
