import React, { FC } from 'react'

import idImg from './../../assets/img/main-id.png'
import { ReactComponent as Check } from './../../assets/icons/check.svg'
import { ReactComponent as Xmark } from './../../assets/icons/xmark.svg'
import './photoStatus.css'

type PhotoStatusProps = {
  badPhoto: boolean
  onTakePictureButtonClick: () => void
}

const PhotoStatus: FC<PhotoStatusProps> = ({ badPhoto, onTakePictureButtonClick }) => {

  const borderColor = badPhoto ? 'border-error' : 'border-success'
  const buttonColor = badPhoto ? 'button-error' : 'button-success'
  const message = badPhoto ? 'REJECTED' : 'ACCEPTED'
  const icon = badPhoto ? <Xmark className='icon' /> : <Check className='icon'/>

  return (
    <div className='photo-container'>
      <img className={`border ${borderColor}`} src={idImg} alt="" />
      <span className={`status-button float-button ${buttonColor}`} >
        {icon}
        {message}
      </span>
      {
        badPhoto && 
        <button className='button button-primary' onClick={onTakePictureButtonClick}>RETAKE PICTURE</button>
      }
    </div>
  )
}

export default PhotoStatus
