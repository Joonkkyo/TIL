import { useContext } from 'react'
import { isActiveContext } from './B2'

export default function Comp() {
  const [isActive, setIsActive] = useContext(isActiveContext)
  return (
    <h2
      onClick={() => {
        setIsActive(!isActive)
      }}>
      B3-2: {JSON.stringify(isActive)}
    </h2>
  )
}
