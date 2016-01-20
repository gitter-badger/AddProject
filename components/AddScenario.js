import React, { Component, PropTypes } from 'react'

export default class AddScenario extends Component {
  handleSubmit(e) {
      e.preventDefault()
      this.props.onScenarioSubmit(this.refs.scenario.value)
      this.refs.scenario.value = ''
    }
  render() {
    let addscenario = this.props.addscenario
    return (
      <div>
        <input type="text" ref="scenario" required />
        <button onClick={(e) => this.handleSubmit(e)}>Add scenario</button>
        <br /><br />
        {addscenario.map(addscenario => <p>{addscenario}</p>)}
      </div>
    )
  }
}

AddScenario.propTypes = {
  onScenarioSubmit: PropTypes.func.isRequired
}
