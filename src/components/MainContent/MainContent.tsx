import React from "react"
import { EmptyPhoto } from '../'
import './main.css'

const MainContent = () => {
  return (
    <div className="wrapper">
      <h1 className="title">Scan your ID</h1>
      <span className="text">Take a picture. it may take time to validate your personal information</span>
      <EmptyPhoto />
    </div>
  )
}

export default MainContent