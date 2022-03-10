import { useSelector } from "react-redux";
import { ToggleRedux } from "./ToggleRedux";
import { getAllTogglesIds } from "./toggles";

export function ListToggles() {
  const ids = useSelector(getAllTogglesIds);

  return (
    <div className="list-toggles">
      {ids.map((id) => (
        <ToggleRedux key={id} id={id} />
      ))}
    </div>
  );
}
