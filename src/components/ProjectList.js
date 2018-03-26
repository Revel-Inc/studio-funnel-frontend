import React, { Component } from 'react'
import './common/styling/ProjectList.css'
import ProjectItem from './common/ProjectItem'

class ProjectList extends Component {

  render() {
    return (
      <div className='list-area mb-2 mt-1'>
        <div className='project-item-header row mb-2 py-2'>
          <div className='col-1 d-flex justify-content-start align-items-center'>
            <p className='list-header mb-0'>Lead</p>
          </div>
          <div className='col-3 d-flex justify-content-start align-items-center'>
            <p className='list-header mb-0'>Project Name</p>
          </div>
          <div className='col-2 d-flex justify-content-start align-items-center'>
            <p className='list-header mb-0'>Company</p>
          </div>
          <div className='col-2 d-flex justify-content-start align-items-center'>
            <p className='list-header mb-0'>Client</p>
          </div>
          <div className='col-1 d-flex justify-content-start align-items-center'>
            <p className='list-header mb-0'>Start</p>
          </div>
          <div className='col-1 d-flex justify-content-start align-items-center'>
            <p className='list-header mb-0'>End</p>
          </div>
          <div className='col-1 d-flex justify-content-start align-items-center'>
            <p className='list-header mb-0'>Hours</p>
          </div>
          <div className='col-1'>
          </div>
        </div>
        {this.props.projects.map((project, index) => {
          return <ProjectItem key={ index } project={ project } />
        })}
      </div>
    )
  }
}

export default ProjectList
