import { CounterReduxCount } from "./CounterReduxCount";
import { CounterReduxIncrement } from "./CounterReduxIncrement";
import { CounterReduxReset } from "./CounterReduxReset";

export function CounterRedux({ id }) {
  return (
    <div className="counter">
      <CounterReduxCount id={id} />
      <CounterReduxIncrement id={id} amount="+1" />
      <CounterReduxIncrement id={id} amount="-1" />
      <CounterReduxReset id={id} />
    </div>
  );
}
