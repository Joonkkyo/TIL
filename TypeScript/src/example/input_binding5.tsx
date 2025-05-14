import { useState } from 'react'

const fruits = ['사과', '바나나', '체리', '딸기']
export default function App() {
  const [selected, setSelected] = useState('')

  return (
    <>
      <select
        value={selected}
        onChange={e => setSelected(e.target.value)}>
        <option value="">선택하세요</option>
        {fruits.map(fruit => (
          <option
            key={fruit}
            value={fruit}>
            {fruit}
          </option>
        ))}
      </select>
      <h2>{selected}</h2>
    </>
  )
}
