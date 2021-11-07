import React, { FC } from 'react'

import idImg from './../../assets/img/main-id.png'
import './photoStatus.css'

type PhotoStatusProps = {
  badPhoto: boolean
  onTakePictureButtonClick: () => void
}

const PhotoStatus: FC<PhotoStatusProps> = ({ badPhoto, onTakePictureButtonClick }) => {

  const borderColor = badPhoto ? 'border-error' : 'border-success'
  const buttonColor = badPhoto ? 'button-error' : 'button-success'
  const message = badPhoto ? 'REJECTED' : 'ACCEPTED'

  return (
    <div className='photo-container'>
      <img className={`border ${borderColor}`} src={idImg} alt="" />
      <span className={`status-button float-button ${buttonColor}`} >{message}</span>
      {
        badPhoto && 
        <button className='button button-primary' onClick={onTakePictureButtonClick}>RETAKE PICTURE</button>
      }
    </div>
  )
}

export default PhotoStatus
