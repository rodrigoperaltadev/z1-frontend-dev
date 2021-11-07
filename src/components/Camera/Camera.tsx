import React, { FC, useCallback, useState, useEffect } from 'react'

import tableImg from './table.png'
import idImg from './id.png'

import './camera.css'

type CameraProps = {
  badPhoto: boolean
  hasPhoto: boolean
}

const Camera: FC<CameraProps> = ({ badPhoto, hasPhoto }) => {          
  
  const [currentImg, setCurrentImg] = useState(tableImg)

  const handleChangeCurrentImg = useCallback(() => {
    hasPhoto ? setCurrentImg(idImg) : setCurrentImg(tableImg) 
  },[hasPhoto])

  useEffect(() => {
    handleChangeCurrentImg()
  }, [handleChangeCurrentImg])

  const borderClass = badPhoto ? 'border-error' : hasPhoto ? 'border-success' : ''

  return (
    <div className='camera-container'>
      <div className={`camera border ${borderClass}`}>
        <img src={currentImg} alt="" />
      </div>
    </div>
  )
}

export default Camera
