import { takeEvery, all, fork, call, put } from 'redux-saga/effects'
import { push, goBack } from 'react-router-redux'
import { searchUsers } from 'api'
import t from './types'

function* searchUsersSaga({ query }) {
  yield put(push('/users'))
  try {
    const items = yield call(searchUsers, query)
    yield put({ type: t.SEARCH_REQUEST_SUCCESS, items })
  } catch (error) {
    yield put({ type: t.SEARCH_REQUEST_ERROR, error })
  }
}

function* backRouteRequestSaga() {
  yield put(goBack())
}

function* watchSearchUsersSaga() {
  yield takeEvery(t.SEARCH_REQUEST, searchUsersSaga)
}

function* watchBackRouteRequestSaga() {
  yield takeEvery(t.PREVIOUS_ROUTE_REQUEST, backRouteRequestSaga)
}

export default function* () {
  yield all([
    fork(watchSearchUsersSaga),
    fork(watchBackRouteRequestSaga),
  ])
}
