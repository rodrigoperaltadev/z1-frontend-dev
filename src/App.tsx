import React, { useState } from 'react'
import api from './api'
import { OUTCOMES } from './constants'
import { AppProvider } from './context'
import { Home, TakePicture } from './views'

const VIEWS = {
  HOME: "HOME",
  TAKE_PICTURE: "TAKE_PICTURE"
}

const App = () => {

  const [badPhoto, setBadPhoto] = useState(false)
  const [hasPhoto, setHasPhoto] = useState(false)   
  
  const createId = async () => {
    const { summary } = await api.id.createIDPayload()
    console.log(summary)
    setHasPhoto(true)
    setBadPhoto(summary.outcome !== OUTCOMES.APPROVE)
   }

  const [currentView, setCurrentView] = useState(VIEWS.HOME)
  const handleTakePictureButtonClick = () => setCurrentView(VIEWS.TAKE_PICTURE)
  const handleReturnToHome = () => setCurrentView(VIEWS.HOME)


  const content = currentView === VIEWS.HOME 
    ? <Home
        badPhoto={badPhoto}
        hasPhoto={hasPhoto} 
        onTakePictureButtonClick={handleTakePictureButtonClick} 
      />
    : <TakePicture
        badPhoto={badPhoto}
        hasPhoto={hasPhoto}  
        returnToHome={handleReturnToHome}
        createId={createId}
      />

  return (<AppProvider>{content}</AppProvider>);
}

export default App
