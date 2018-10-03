import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UserSearch from 'containers/User/Search'
import User from 'containers/User'
import WarningBarLayout from 'layouts/Common/WarningBar'
import './style.css'

const Home = () =>
  <div className="homeLayout__container">
    <WarningBarLayout />
    <Switch>
      <Route path="/users" component={User} />
      <Route component={UserSearch} />
    </Switch>
  </div>

export default Home
