import React, { Component } from 'react'
import NavBar from '../common/NavBar'
import SideBar from '../common/SideBar'

const types = [ 'Biz Dev', 'Interal', 'Project']
const status = [ 'Upcoming', 'Ongoing']

class ProjectFunnel extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className='container'>
          <SideBar projectType={ types } projectStatus={ status } />
        </div>
      </div>
    )
  }
}

export default ProjectFunnel
