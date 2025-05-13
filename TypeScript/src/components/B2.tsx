import B3_1 from './B3_1'
import B3_2 from './B3_2'
import { createContext, useState } from 'react'

type IsActiveState = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

export const isActiveContext = createContext<IsActiveState | null>(null)

export default function B2() {
  const isActiveState = useState(true)
  return (
    <isActiveContext.Provider value={isActiveState}>
      <B3_1 />
      <B3_2 />
    </isActiveContext.Provider>
  )
}
