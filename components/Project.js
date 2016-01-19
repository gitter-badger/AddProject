import React, { Component, PropTypes } from 'react'

export default class Project extends Component {
  render() {
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
        {this.props.scenario}
      </td>
      </tr>
    )
  }
}

Project.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
