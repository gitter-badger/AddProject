export const ADD_PROJECT = 'ADD_PROJECT'

let nextTodoId = 1

export function addProject(name, date, scenario) {
  return {
    id: nextTodoId++,
    type: ADD_PROJECT,
    name,
    date,
    scenario
  }
}
