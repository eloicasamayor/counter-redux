export function getActivat(state) {
  return state.toggle;
}

const TOGGLE_ACTIVE = "toggle/TOGGLE_ACTIVE";
export function toggleActive() {
  return { type: TOGGLE_ACTIVE };
}

const OFF = "toggle/OFF";
export function off() {
  return { type: OFF };
}

const ON = "toggle/ON";
export function on() {
  return { type: ON };
}

export function toggle(state = false, action) {
  switch (action.type) {
    case TOGGLE_ACTIVE:
      return !state;
    case OFF:
      return false;
    case ON:
      return true;
    default:
      return state;
  }
}
