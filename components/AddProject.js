import React, { Component, PropTypes } from 'react'

export default class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {check: ''};
  }
  handleCheck(e) {
    for(var i=0; 2; ++i){
      if(document.getElementsByName('scenario')[i].checked){
           this.setState({check: this.state.check + document.getElementsByName('scenario')[i].value + ' '})
      }
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    const project = this.refs.project.value.trim()
    const date = this.refs.reporting.value.trim()
    this.props.onProjectSubmit(project, date, this.state.check)
    this.refs.project.value = ''
    this.refs.reporting.value = ''
    for(var i=0; 2; ++i){
    document.getElementsByName('scenario')[i].checked = false;
    this.setState({check: ''})
    }
    }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          Project name:{' '}<input type="text" ref="project" required />{' '}
          Reporting date:{' '}<input type="text" ref="reporting" required />{' '}
          Base:<input type="checkbox" name="scenario" value="base" onChange={(e) => {this.handleCheck(e)}}/>{' '}
          Stress:<input type="checkbox" name="scenario" value="stress" onChange={(e) => {this.handleCheck(e)}}/>{' '}
          Template:<input type="checkbox" name="scenario" value="template" onChange={(e) => {this.handleCheck(e)}}/>{' '}
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
