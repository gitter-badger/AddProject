import { ADD_PROJECT } from '../actions/update'
import Immutable from 'immutable'

export default function updateProject (state = Immutable.List(['']), action)  {
  switch(action.type) {
    case ADD_PROJECT:
      return [
      ...state,
      action.id,
      action.name,
      action.date,
      action.scenario

      ]
    default:
      return state
  }
}
