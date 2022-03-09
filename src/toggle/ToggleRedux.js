import { useDispatch, useSelector } from "react-redux";
import { toggle, getActivat, toggleActive, off, on } from "./toggle";

export function ToggleRedux() {
  const dispatch = useDispatch();
  const activat = useSelector(getActivat);
  return (
    <div className="toggle">
      <h2>toggle</h2>
      <div className="toggle-res">
        Activat:<b> {activat ? "cert" : "fals"}</b>
      </div>

      <button
        onClick={() => {
          dispatch(toggleActive());
        }}
      >
        Togglejar
      </button>
      <button
        onClick={() => {
          dispatch(off());
        }}
      >
        Off
      </button>
      <button
        onClick={() => {
          dispatch(on());
        }}
      >
        On
      </button>
    </div>
  );
}
