import React, { FC } from 'react'
import { useInterval } from './../../hooks'
import { Camera } from '../../components'
import { ReactComponent as Bulb } from './../../assets/icons/bulb.svg'

import './takePicture.css'

type TakePictureProps = {
  returnToHome: () => void
  createId: () => void
  hasPhoto: boolean
  badPhoto: boolean
}

const TakePicture:FC<TakePictureProps> = ({ returnToHome, badPhoto, hasPhoto, createId }) => {

  const THREE_SECONDS = 3000

  useInterval(() => {
    (!hasPhoto || (hasPhoto && badPhoto)) && createId()
  }, THREE_SECONDS )

  const MessageStatusCamera = () => {
    const message = !hasPhoto ? 'Room lighting is too low' : !badPhoto ? 'Picture taken' : ''
    return (
      <div className='tp-text'>
        {!hasPhoto && <Bulb className='icon bulb' /> } 
        { message }
      </div>
    )
  }

  return (
    <div className='tp-view'>
      <div className='tp-container'>
        <header>
          <h1 className='tp-title'>Take Picture</h1>
          <div className='tp-text-wrapper'>
            <span className='tp-text'>Fit your ID card inside the frame.</span>
            <span className='tp-text'>The picture will be taken automactically.</span>
          </div>
        </header>
        <Camera badPhoto={badPhoto} hasPhoto={hasPhoto} />
        <MessageStatusCamera />
        <button className='tp-title cancel-button' onClick={returnToHome}>CANCEL</button>
      </div>
    </div>
  )
}

export default TakePicture
