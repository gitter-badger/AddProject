import React, { Component, PropTypes } from 'react'

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {check: ''};
  }
  handleClick(e) {
    this.refs.projectName.value = ''
    this.refs.reportingDate.value = ''
  }
  handleCheck(e) {
    for(var i=0; 2; ++i){
      if(document.getElementsByName('scenario')[i].checked){
           this.setState({check: this.state.check + document.getElementsByName('scenario')[i].value + ' '})
      }
    }
  }
  render() {
    const { addProject, update } = this.props
    return (
      <p>
        Project name
        <input type='text' ref='projectName' />
        Reporting date
        <input type='text' ref='reportingDate' />
        Scenario:
        Base:<input type="checkbox" name="scenario" value="base" onChange={(e) => {this.handleCheck(e)}}/>
        Stress:<input type="checkbox" name="scenario" value="stress" onChange={(e) => {this.handleCheck(e)}}/>
        Template:<input type="checkbox" name="scenario" value="template" onChange={(e) => {this.handleCheck(e)}}/>
        <button onClick={(e) => { addProject(this.refs.projectName.value, this.refs.reportingDate.value,  this.state.check); this.handleClick(e)} }>
         Submit Project
        </button>
        <br/><br/>
        <table>
        {update.map(update => <tr><td>{update}</td></tr>)}
        </table>
        {' '}
      </p>
    )
  }

}

export default Update
