import { combineReducers } from 'redux'
import undoable, { distinctState } from 'redux-undo'

import { ADD_PROJECT } from './actions'

function project(state, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        id: action.id,
        name: action.name,
        date: action.date,
        scenario: action.scenario
      }
    default:
      return state
  }
}

function projects(state = [], action) {
  switch (action.type) {
    case ADD_PROJECT:
      return [
        ...state,
        project(undefined, action)
      ]
    default:
      return state
  }
}

const saveProjectApp = combineReducers({
  projects: undoable(projects, { filter: distinctState() })
})

export default saveProjectApp
