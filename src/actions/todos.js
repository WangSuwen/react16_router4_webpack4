import ActionType from '@types';

export function clearMsg() {
  return {
    type: ActionType.INPUT_CLEAR
  }
}
export function inputChange(value) {
  return {
    type: ActionType.INPUT_CHANGE,
    value,
  }
}