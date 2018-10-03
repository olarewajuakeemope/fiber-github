import { connect } from 'react-redux'
import Panel from 'components/User/Commit/Panel'
import {
  isLoadingCommits,
  getCommits,
  getCommitsFilter,
  getActiveRepo,
  getActiveRepoDescription,
} from 'redux/commit/selectors'

const mapStateToProps = (state) => {
  return {
    commits: getCommits(state),
    filter: getCommitsFilter(state),
    isLoading: isLoadingCommits(state),
    hasSelected: !!getActiveRepo(state),
    description: getActiveRepoDescription(state),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...ownProps,
  }
}

export default connect(mapStateToProps, null, mergeProps)(Panel)
