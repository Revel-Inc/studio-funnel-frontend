import React from 'react'
import './styling/ProjectItem.css'

const findInitials = (name) => {
  let array = name.split(' ')
  const initials = array.map(name => name[0]).join('')
  return initials
}

const ProjectItem = ({project}) => {
  const { title, logo, client, startDate, endDate, hours, projectLead, team } = project

  return (
    <div className='project-item row my-2 py-4'>
      <div className='col-1 d-flex justify-content-start align-items-center'>
        <div className='leader-circle d-flex justify-content-center align-items-center'>
          <p className='mb-0 text-white font-weight-bold'>{ findInitials(projectLead)}</p>
        </div>
        <p className='team-count'>{ `+${team.length}` }</p>
      </div>
      <div className='col-3 d-flex justify-content-start align-items-center'>
        <p className='mb-0 font-weight-bold'>{ title }</p>
      </div>
      <div className='col-2 d-flex justify-content-start align-items-center'>
        <p className='mb-0'>{ logo }</p>
      </div>
      <div className='col-2 d-flex justify-content-start align-items-center'>
        <p className='mb-0'>{ client }</p>
      </div>
      <div className='col-1 d-flex justify-content-start align-items-center'>
        <p className='mb-0'>{ startDate }</p>
      </div>
      <div className='col-1 d-flex justify-content-start align-items-center'>
        <p className='mb-0'>{ endDate }</p>
      </div>
      <div className='col-1 d-flex justify-content-start align-items-center'>
        <p className='mb-0'>{ `${hours}/wk` }</p>
      </div>
      <div className='col-1 d-flex justify-content-start align-items-center'>
        <div className='expand-circle d-flex justify-content-center align-items-center'>
          <p className='expand-plus mb-0 font-weight-bold'>+</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
