import { useState } from 'react'
import './index.css'

export default function App() {
  const [message, setMessage] = useState('')
  return (
    <>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      {message.trim() && <div>입력된 내용이 있어요</div>}
    </>
  )
}
