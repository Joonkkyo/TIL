import { useRef } from 'react'
import TextField from './components/TextField'

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <input
        type="text"
        ref={inputRef}
      />
      <button
        onClick={() => {
          inputRef.current?.focus()
        }}>
        포커스
      </button>
    </>
  )
}
