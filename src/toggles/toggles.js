import { act } from "react-dom/test-utils";
import { combineReducers } from "redux";

export function getActivat(state, { id }) {
  return state.toggles.byId[id];
}

const TOGGLE_ACTIVE = "toggle/TOGGLE_ACTIVE";
export function toggleActive(id) {
  return { type: TOGGLE_ACTIVE, id };
}

const OFF = "toggle/OFF";
export function off(id) {
  return { type: OFF, id };
}

const ON = "toggle/ON";
export function on(id) {
  return { type: ON, id };
}

const CREATE_TOGGLE = "toggle/CREATE_TOGGLE";
export function createToggle(id) {
  return { type: CREATE_TOGGLE, id };
}

export function getCount(state, { id }) {
  return state.toggles.byId[id].value;
}

export function byId(state = {}, action) {
  switch (action.type) {
    case CREATE_TOGGLE: {
      const copy = { ...state };

      copy[action.id] = { id: action.id, value: false };
      return copy;
    }
    case TOGGLE_ACTIVE: {
      const stateCopy = { ...state };
      const toggleCopy = { ...state[action.id] };
      toggleCopy.value = !toggleCopy.value;
      stateCopy[action.id] = toggleCopy;
      return stateCopy;
    }
    case OFF: {
      const stateCopy = { ...state };
      const toggleCopy = { ...stateCopy[action.id] };
      toggleCopy.value = false;
      stateCopy[action.id] = toggleCopy;
      return stateCopy;
    }
    case ON:
      const stateCopy = { ...state };
      const toggleCopy = { ...stateCopy[action.id] };
      toggleCopy.value = true;
      stateCopy[action.id] = toggleCopy;
      return stateCopy;
    default:
      return state;
  }
}
export function allIds(state = [], action) {
  switch (action.type) {
    case CREATE_TOGGLE: {
      return [...state, action.id];
    }
    default:
      return state;
  }
}
export function getAllTogglesIds(state) {
  return state.toggles.allIds;
}
export const toggles = combineReducers({ byId, allIds });
