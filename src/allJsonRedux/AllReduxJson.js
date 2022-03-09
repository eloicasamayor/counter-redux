import { useSelector } from "react-redux";
import { getAllJson } from "./allJsonReducer";
import JSONPretty from "react-json-pretty";
export function AllReduxJson() {
  const allJson = useSelector(getAllJson);
  return (
    <JSONPretty className="code" id="json-pretty" data={allJson}></JSONPretty>
  );
}
