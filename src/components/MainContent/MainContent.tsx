import React, { FC } from "react"
import { EmptyPhoto } from '../'
import { PhotoStatus } from "../PhotoStatus"
import './main.css'

type MainContentProps = {
  onTakePictureButtonClick: () => void
  hasPhoto: boolean
  badPhoto: boolean
}

const MainContent:FC<MainContentProps> = ({ badPhoto, hasPhoto, onTakePictureButtonClick}) => {

  const Photo = () => hasPhoto ? (<PhotoStatus badPhoto={badPhoto} onTakePictureButtonClick={onTakePictureButtonClick} />) : (<EmptyPhoto onTakePictureButtonClick={onTakePictureButtonClick} />)

  return (
    <div className="wrapper">
      <h1 className="title">Scan your ID</h1>
      <span className="text">Take a picture. it may take time to validate your personal information</span>
      <Photo />
    </div>
  )
}

export default MainContent