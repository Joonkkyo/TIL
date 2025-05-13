import { useState, createContext } from 'react'
import A1 from './components/A1'
import B1 from './components/B1'

export const ColorContext = createContext('')
export const MessageContext = createContext('')

export default function App() {
  const [color] = useState('red')
  const [message] = useState('')
  return (
    <ColorContext.Provider value={color}>
      <MessageContext.Provider value={message}>
        <div>App</div>
        <A1 />
        <B1 />
      </MessageContext.Provider>
    </ColorContext.Provider>
  )
}
