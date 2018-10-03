import { takeEvery, take, all, select, fork, put, call } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { matchAiParams } from 'redux/history'
import { getCurrUser } from 'redux/commit/selectors'
import { commitSearchForm } from 'redux/forms'
import { getRepos, getCommits } from 'api'
import t from './types'

function* commitRouteSaga() {
  const { user } = matchAiParams()
  if (user) {
    yield put({ type: t.SET_CURRENT_REPO, repo: null })
    yield put({ type: t.SET_CURRENT_USER, user })
    yield put({ type: t.GET_REPOS_REQUEST })
    try {
      const repos = yield call(getRepos, user)
      yield put({ type: t.GET_REPOS_SUCCESS, repos })
    } catch (error) {
      yield put({ type: t.GET_REPOS_ERROR, error })
    }
  }
}

function* commitSaga({ repo }) {
  const user = yield select(getCurrUser)
  try {
    const commits = yield call(getCommits, user, repo)
    yield put({ type: t.GET_COMMITS_SUCCESS, commits })
  } catch (error) {
    yield put({ type: t.GET_COMMITS_ERROR, error })
  }
}

function* watchFilterCommitSaga() {
  let commitFilterForm = yield take((action) =>
    action.type === t.GET_COMMITS_FILTER &&
    action.meta.form === commitSearchForm.name)

  while (true && commitFilterForm) {
    const { payload } = yield take(t.GET_COMMITS_FILTER)
    yield put({ type: t.SET_COMMITS_FILTER, filter: payload })
    commitFilterForm = yield take((action) => action.meta.form === commitSearchForm.name)
  }
}

function* watchCommitRouteSaga() {
  yield takeEvery(LOCATION_CHANGE, commitRouteSaga)
}

function* watchCommitRequestSaga() {
  yield takeEvery(t.GET_COMMITS_REQUEST, commitSaga)
}

export default function* () {
  yield all([
    fork(watchCommitRouteSaga),
    fork(watchCommitRequestSaga),
    fork(watchFilterCommitSaga),
  ])
}
