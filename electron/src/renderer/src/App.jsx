import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import FocusForm from './components/FocusForm'
import { useEffect, useState } from 'react'

function App() {
  const handleTakeScreenshot = async () => {
    try {
      const localData = await localStorage.getItem('focusFormData')
      const formData = JSON.parse(localData)
      const image = await window.electron.ipcRenderer.send('take-screenshot', {
        formData
      })
    } catch (error) {
      console.error('Error taking screenshot:', error)
    }
  }

  useEffect(() => {
    // Take a screenshot immediately when the app starts
    handleTakeScreenshot()

    // Set up interval for every 2 minutes (120000 ms)
    const intervalId = setInterval(
      () => {
        handleTakeScreenshot()
      },
      2 * 60 * 1000
    )

    // Clear the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <FocusForm />
    </>
  )
}

export default App
