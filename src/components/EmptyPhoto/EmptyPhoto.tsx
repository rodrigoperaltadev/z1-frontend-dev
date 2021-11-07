import React, { FC } from 'react'
import { EmptyCard } from '../'

import './emptyPhoto.css'

type EmptyPhotoProps = {
  onTakePictureButtonClick: () => void
}

const EmptyPhoto: FC<EmptyPhotoProps> = ({onTakePictureButtonClick}) => {
  return (
    <div className='empty-photo'>
      <EmptyCard />
      <button className='float-button button button-primary' onClick={onTakePictureButtonClick}>TAKE PICTURE</button>
    </div>
  )
}

export default EmptyPhoto
