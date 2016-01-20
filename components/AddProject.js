import React, { Component, PropTypes } from 'react'

export default class AddProject extends Component {
  constructor(props) {
        super(props)
        this.state = {scenarioslist: []}
        this.handleCheck = this.handleCheck.bind(this)
  }
  handleCheck(i) {
        this.setState({scenarioslist: this.state.scenarioslist.concat([i])})
  }
  handleSubmit(e) {
        e.preventDefault()
        const project = this.refs.project.value.trim()
        const date = this.refs.reporting.value.trim()
        const scenario = this.state.scenarioslist
        this.props.onProjectSubmit(project, date, scenario)
        this.refs.project.value = ''
        this.refs.reporting.value = ''
        for(let i=0; i < this.state.scenarioslist.length; i++)
        {
        document.getElementsByName('scenario')[i].checked = false;
        }
        this.setState({scenarioslist: []})
    }
  render() {
    let addscenario = this.props.addscenario
    let index = Object.keys(addscenario)
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          Project name:{' '}<input type="text" ref="project" required />{' '}
          Reporting date:{' '}<input type="text" ref="reporting" required />{' '}
          Scenarios:
          {' '}
          {index.map(index => <span>{addscenario[index]}<input type="checkbox" name="scenario" onChange={() => this.handleCheck(addscenario[index])}/></span>)}
          {' '}
          <button>
            Add
          </button>
        </form>
      </div>
    )
  }
}

AddProject.propTypes = {
  onProjectSubmit: PropTypes.func.isRequired
}
