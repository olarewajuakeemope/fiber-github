import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { userSearchForm } from 'redux/forms'
import { searchQuery } from 'redux/user/actions'
import UserSearch from 'components/User/Search'

const mapDispatchToProps = {
  searchQuery,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    onSubmit: query => dispatchProps.searchQuery(query),
    ...ownProps,
  }
}

const UserSearchForm = reduxForm({
  form: userSearchForm.name,
})(UserSearch)

export default connect(null, mapDispatchToProps, mergeProps)(UserSearchForm)
