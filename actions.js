export const ADD_PROJECT = 'ADD_PROJECT'
export const ADD_SCENARIO = 'ADD_SCENARIO'

let nextId = 1

export function addProject(name, date, scenario) {
  return {
    id: nextId++,
    type: ADD_PROJECT,
    name,
    date,
    scenario
  }
}


export function addScenario(scenarioName) {
  return {
    type: ADD_SCENARIO,
    scenarioName
  }
}
