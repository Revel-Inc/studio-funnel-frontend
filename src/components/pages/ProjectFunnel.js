import React, { Component } from 'react'
import NavBar from '../common/NavBar'
import SideBar from '../common/SideBar'
import ProjectList from '../ProjectList'

const types = [ 'Biz Dev', 'Interal', 'Project' ]
const status = [ 'Upcoming', 'Ongoing']
const projects = [
  { title: 'HR Career Connections', logo: 'Microsoft', client: 'Michelle Jang', startDate: '3/19/18', endDate: '5/22/18', hours: '60', projectLead: 'Ted Hoot', team: [ 'Ted Hoot', 'Marc Perez', 'Matty McBride' ] },
  { title: 'HR Career Connections', logo: 'Microsoft', client: 'Michelle Jang', startDate: '3/19/18', endDate: '5/22/18', hours: '60', projectLead: 'Ted Hoot', team: [ 'Ted Hoot', 'Marc Perez', 'Matty McBride' ] },
  { title: 'HR Career Connections', logo: 'Microsoft', client: 'Michelle Jang', startDate: '3/19/18', endDate: '5/22/18', hours: '60', projectLead: 'Ted Hoot', team: [ 'Ted Hoot', 'Marc Perez', 'Matty McBride' ] },
  { title: 'HR Career Connections', logo: 'Microsoft', client: 'Michelle Jang', startDate: '3/19/18', endDate: '5/22/18', hours: '60', projectLead: 'Ted Hoot', team: [ 'Ted Hoot', 'Marc Perez', 'Matty McBride' ] },
  { title: 'C2C', logo: 'Microsoft', client: 'Robocop', startDate: '3/5/18', endDate: '6/25/18', hours: '60', projectLead: 'Marc Perez', team: [ 'Marc Perez', 'Matty McBride', 'Ted Hoot' ] }
]

class ProjectFunnel extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className='container d-flex'>
          <SideBar projectType={ types } projectStatus={ status } />
          <ProjectList projects={ projects } />
        </div>
      </div>
    )
  }
}

export default ProjectFunnel
