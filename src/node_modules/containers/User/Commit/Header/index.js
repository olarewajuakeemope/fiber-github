import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Header from 'components/User/Commit/Header'
import { goBack } from 'redux/user/actions'
import { commitSearchForm } from 'redux/forms'
import { getCurrUser, getCommits } from 'redux/commit/selectors'

const mapDispatchToProps = {
  goBack,
}

const mapStateToProps = (state) => {
  return {
    user: getCurrUser(state),
    commits: getCommits(state),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
  }
}

const CommitSearchForm = reduxForm({
  form: commitSearchForm.name,
})(Header)

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CommitSearchForm)
