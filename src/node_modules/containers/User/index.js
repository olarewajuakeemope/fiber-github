import { connect } from 'react-redux'
import { isLoading } from 'redux/user/selectors'
import User from 'components/User'

const mapStateToProps = (state) => {
  return {
    loading: isLoading(state),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
  }
}

export default connect(mapStateToProps, null, mergeProps)(User)
