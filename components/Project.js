import React, { Component, PropTypes } from 'react'

export default class Project extends Component {
  render() {
    const scenario = this.props.scenario
    return (
      <tr >
      <td style={{
          background: 'blue'
        }}>
        {this.props.id}
      </td>
      <td style={{
          background: 'green'
        }}>
        {this.props.name}
      </td>
      <td style={{
          background: 'red'
        }}>
        {this.props.date}
      </td>
      <td style={{
          background: 'yellow'
        }}>
        {scenario.map(scenario => <p>{scenario}</p>)}
      </td>
      </tr>
    )
  }
}
