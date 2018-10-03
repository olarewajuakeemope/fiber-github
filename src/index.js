
import React from 'react'
import { render } from 'react-dom'
import history from 'redux/history'
import Root from 'containers/Root'
import configureStore from 'redux/configureStore'

const initialState = {}
const store = configureStore(initialState, history)

render(<Root history={history} store={store} />, document.getElementById('root'))
