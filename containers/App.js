import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { addProject } from '../actions'
import AddProject from '../components/AddProject'
import Footer from '../components/Footer'
import ProjectsList from '../components/ProjectsList'

class App extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div>
        <AddProject
          onProjectSubmit={(project, date, scenario) => dispatch(addProject(project, date, scenario))} />
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


App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  undoDisabled: PropTypes.bool.isRequired,
  redoDisabled: PropTypes.bool.isRequired
}

function select(state) {
  return {
    undoDisabled: state.projects.past.length === 0,
    redoDisabled: state.projects.future.length === 0,
    projects: state.projects.present
  }
}

export default connect(select)(App)
