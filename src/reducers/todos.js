import ActionType from '@types';

const defaultState = {
  inputValue: '',
  defaultValue: '这是Container传出来的默认输入',
};

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.INPUT_CHANGE:
      return {
        ...state,
        inputValue: action.value,
      }
    case ActionType.INPUT_CLEAR:
      return {
        ...state,
        inputValue: '',
      }  
    default:
      return state
  }
}
export default todos;