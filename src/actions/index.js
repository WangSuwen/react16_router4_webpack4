import ActionType from '@types';


let nextTodoId = 0
export const addTodo = text => ({
  type: ActionType.ADD_TODO,
  id: nextTodoId++,
  text
})
​
export const setVisibilityFilter = filter => ({
  type: ActionType.SET_VISIBILITY_FILTER,
  filter
})
​
export const toggleTodo = id => ({
  type: ActionType.TOGGLE_TODO,
  id
})
​