import React from 'react'
import { EmptyCard } from '../'

import './emptyPhoto.css'

const EmptyPhoto = () => {
  return (
    <div className='empty-photo'>
      <EmptyCard />
      <button className='float-button button'>TAKE PICTURE</button>
    </div>
  )
}

export default EmptyPhoto
