export const ADD_PROJECT = 'ADD_PROJECT'

let nextId = 1;
export function addProject(name, date, scenario) {
  return {
    type: ADD_PROJECT,
    name,
    date,
    scenario,
    id: nextId++
  }
}
