import React from 'react'
import './styling/SideBar.css'

const FilterPill = ({ name }) => {

  return (
    <div className='filter-pill d-flex justify-content-center align-items-center mb-2'>
      <p className='my-0'>{ name }</p>
    </div>
  )
}

export default FilterPill
