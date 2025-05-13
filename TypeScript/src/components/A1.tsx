import A2 from './A2'
import { useContext } from 'react'
import { ColorContext } from '../App'

export default function A1() {
  const color = useContext(ColorContext)
  return (
    <>
      <div>A1</div>
      <A2 />
    </>
  )
}
