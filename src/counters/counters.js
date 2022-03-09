import { act } from "react-dom/test-utils";
import { combineReducers } from "redux";
const INCREMENT = "counter/INCREMENT";
export function increment(id, amount) {
  return { type: INCREMENT, id, amount };
}

const RESET = "counter/RESET";
export function reset(id) {
  if (!id) throw new Error();
  return { type: RESET, id };
}

const CREATE_COUNTER = "counters/CREATE_COUNTER";
export function createCounter(id) {
  return { type: CREATE_COUNTER, id };
}

export function byId(state = {}, action) {
  switch (action.type) {
    case CREATE_COUNTER: {
      const copy = { ...state };
      copy[action.id] = { id: action.id, count: 0 };
      return copy;
    }
    case INCREMENT: {
      const stateCopy = { ...state };
      const counter = state[action.id];
      const countercopy = { ...counter };

      countercopy.count += action.amount;

      stateCopy[action.id] = countercopy;
      return stateCopy;
    }
    case RESET: {
      const stateCopy = { ...state };
      stateCopy[action.id].count = 0;
      return stateCopy;
    }
    default:
      return state;
  }
}
export function allIds(state = [], action) {
  switch (action.type) {
    case CREATE_COUNTER: {
      return [...state, action.id];
    }
    default:
      return state;
  }
}
export function getAllCounterIds(state) {
  return state.counters.allIds;
}
export const counters = combineReducers({ byId, allIds });

export function getCount(state, { id }) {
  return state.counters.byId[id].count;
}
