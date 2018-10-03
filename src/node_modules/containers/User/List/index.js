import { connect } from 'react-redux'
import { getUsers } from 'redux/user/selectors'
import UserList from 'components/User/List'

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
  }
}

export default connect(mapStateToProps, null, mergeProps)(UserList)
