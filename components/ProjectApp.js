import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { addProject } from '../actions'
import AddProject from './AddProject'
import Footer from './Footer'
import ProjectsList from './ProjectsList'

class ProjectApp extends Component {
  render() {
    const { dispatch, scenarios } = this.props
    return (
      <div>
        <AddProject
          onProjectSubmit={(project, date, scenario) => dispatch(addProject(project, date, scenario))}
          addscenario={this.props.scenarios}
          numberscenarios={this.props.scenarios.length}/>
        <br/><br />
        <ProjectsList
          projects={this.props.projects} />
        <Footer
          onUndo={() => dispatch(ActionCreators.undo())}
          onRedo={() => dispatch(ActionCreators.redo())}
          undoDisabled={this.props.undoDisabled}
          redoDisabled={this.props.redoDisabled} />
      </div>
    )
  }
}


ProjectApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  scenarios: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  undoDisabled: PropTypes.bool.isRequired,
  redoDisabled: PropTypes.bool.isRequired
}

function select(state) {
  return {
    undoDisabled: state.projects.past.length === 0,
    redoDisabled: state.projects.future.length === 0,
    projects: state.projects.present,
    scenarios: state.scenarios.present
  }
}

export default connect(select)(ProjectApp)
