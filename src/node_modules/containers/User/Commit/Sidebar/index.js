import { connect } from 'react-redux'
import { isLoadingRepos, getRepos } from 'redux/commit/selectors'
import { getCommits } from 'redux/commit/actions'
import Sidebar from 'components/User/Commit/Sidebar'

const mapDispatchToProps = {
  getCommits,
}

const mapStateToProps = (state) => {
  return {
    repos: getRepos(state),
    isLoading: isLoadingRepos(state),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...dispatchProps,
    ...ownProps,
    ...stateProps,
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Sidebar)
