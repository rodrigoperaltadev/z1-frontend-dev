import React, { FC } from 'react'
import { Header, MainContent } from '../../components'
import './home.css'

type HomeProps = {
  onTakePictureButtonClick: () => void
  hasPhoto: boolean
  badPhoto: boolean
}

const Home:FC<HomeProps> = ({onTakePictureButtonClick, badPhoto, hasPhoto}) => {

  return (
    <div className='main'>
     <Header />
     <MainContent
      badPhoto={badPhoto}
      hasPhoto={hasPhoto} 
      onTakePictureButtonClick={onTakePictureButtonClick} 
    />
    </div>
  )
}

export default Home
