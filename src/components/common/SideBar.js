import React from 'react'
import FilterPill from './FilterPill'
import './styling/SideBar.css'

const SideBar = ({ projectType, projectStatus }) => {
    return (
      <div className='side-bar w3-sidebar'>
        <p className='side-bar-title'>Dashboard</p>
        <div className='filter-list'>
          {projectType.map((name, index) => {
            return <FilterPill key={ index } name={ name } />
          })}
        </div>
        <div className='filter-list'>
          {projectStatus.map((name, index) => {
            return <FilterPill key={ index } name={ name } />
          })}
        </div>
      </div>
    )
}

export default SideBar
