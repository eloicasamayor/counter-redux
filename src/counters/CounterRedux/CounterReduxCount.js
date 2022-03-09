import { useSelector } from "react-redux";
import { getCount } from "..";

export function CounterReduxCount({ id }) {
  const count = useSelector((state) => getCount(state, { id }));
  return (
    <>
      <h2>{id}</h2>
      <div className="count-num">{count}</div>
    </>
  );
}
