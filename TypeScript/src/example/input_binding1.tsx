import { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')

  return (
    <>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <pre>{text}</pre>
    </>
  )
}
