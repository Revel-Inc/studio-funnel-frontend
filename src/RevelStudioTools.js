import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'
import ProjectFunnel from './components/pages/ProjectFunnel'

class RevelStudioTools extends Component {

  render() {
    return (
      <ProjectFunnel />
    )
  }
}

export default RevelStudioTools
