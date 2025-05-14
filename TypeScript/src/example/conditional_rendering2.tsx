import { useState } from 'react'
import './index.css'

export default function App() {
  const [isActive, setIsActive] = useState(false)

  function toggle() {
    setIsActive(!isActive)
  }

  function renderMessage() {
    if (isActive) {
      return <h1>활성화 - {String(isActive)}</h1>
    } else {
      return <h1>비활성화 - {String(isActive)}</h1>
    }
  }

  return (
    <>
      <button onClick={toggle}>토글</button>
      {renderMessage()}
    </>
  )
}
