import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { addScenario } from '../actions'
import AddScenario from '../components/AddScenario'
import ProjectApp from '../components/ProjectApp'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {scenariosDisplay: 'inline', projectsDisplay: 'none'};
    }
  handleNext(e) {
      this.setState({scenariosDisplay: 'none', projectsDisplay: 'inline'})
    }
  render() {
    const { dispatch } = this.props
    return (
      <div>
        <div style={{display: this.state.scenariosDisplay}}>
        <AddScenario addscenario={this.props.scenarios} onScenarioSubmit={(scenarioName) => dispatch(addScenario(scenarioName))} />
        <button onClick={(e) => this.handleNext(e)}>Next</button>
        </div>
        <br/><br />
        <br /><br />
        <div style={{display: this.state.projectsDisplay}}>
        <ProjectApp />
        </div>
      </div>
    )
  }
}


App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function select(state) {
  return {
    scenarios: state.scenarios.present
  }
}

export default connect(select)(App)
