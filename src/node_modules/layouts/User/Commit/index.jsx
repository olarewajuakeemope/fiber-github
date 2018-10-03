import React from 'react'
import HeaderContainer from 'containers/User/Commit/Header'
import SidebarContainer from 'containers/User/Commit/Sidebar'
import PanelContainer from 'containers/User/Commit/Panel'
import './style.css'

const Commit = () => (
  <div className="userCommits__wrapper">
    <HeaderContainer />
    <div className="userCommits__panelWrapper">
      <SidebarContainer />
      <PanelContainer />
    </div>
  </div>
)

export default Commit
