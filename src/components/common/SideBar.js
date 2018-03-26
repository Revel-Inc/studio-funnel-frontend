import React from 'react'
import FilterPill from './FilterPill'
import './styling/SideBar.css'

const SideBar = ({ projectType, projectStatus }) => {
    return (
      <div className='side-bar mr-4'>
        <p className='side-bar-title mb-4 pt-2 pl-3'>Dashboard</p>
        <p className='pl-3 mb-2'>Project type:</p>
        <div className='filter-list'>
          {projectType.map((name, index) => {
            return <FilterPill key={ index } name={ name } />
          })}
        </div>
        <p className='pl-3 mb-2 mt-4'>Project status:</p>
        <div className='filter-list'>
          {projectStatus.map((name, index) => {
            return <FilterPill key={ index } name={ name } />
          })}
        </div>
      </div>
    )
}

export default SideBar
