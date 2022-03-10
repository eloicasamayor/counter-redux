import { useDispatch, useSelector } from "react-redux";
import { byId, getActivat, toggleActive, off, on } from "./toggles";

export function ToggleRedux({ id }) {
  const dispatch = useDispatch();
  const activat = useSelector((state) => getActivat(state, { id }));
  return (
    <div className={"toggle " + (activat.value ? "on" : "off")}>
      <h2>{id}</h2>
      <div className="toggle-res">
        Activat:<b> {activat.value.toString()}</b>
      </div>

      <button
        onClick={() => {
          dispatch(toggleActive(id));
        }}
      >
        Togglejar
      </button>
      <button
        onClick={() => {
          dispatch(off(id));
        }}
      >
        Off
      </button>
      <button
        onClick={() => {
          dispatch(on(id));
        }}
      >
        On
      </button>
    </div>
  );
}
