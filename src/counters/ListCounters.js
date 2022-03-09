import { useSelector } from "react-redux";
import { CounterRedux } from "./CounterRedux";
import { getAllCounterIds } from "./counters";

export function ListCounters() {
  const ids = useSelector(getAllCounterIds);
  return (
    <div className="list-counters">
      {ids.map((id) => (
        <CounterRedux key={id} id={id} />
      ))}
    </div>
  );
}
