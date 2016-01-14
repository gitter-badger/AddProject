import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Update from '../components/Update'
import * as UpdateActions from '../actions/update'

function mapStateToProps(state) {
  return {
    update: state.update
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UpdateActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Update)
