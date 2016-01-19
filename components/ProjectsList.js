import React, { Component, PropTypes } from 'react'
import Project from './Project'

export default class ProjectsList extends Component {
  render() {
    return (
      <table>
      <thead>
      <th>ID</th>
      <th>Project Name</th>
      <th>Reporting Date</th>
      <th>Scenario</th>
      </thead>
      <tbody>
        {this.props.projects.map(project =>
          <Project {...project}/>
        )}
      </tbody>
      </table>
    )
  }
}

ProjectsList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired
}
