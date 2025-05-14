import { useState } from 'react'

export default function App() {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
        동의합니다.
      </label>
      <h2>동의 여부: {checked ? '예' : '아니오'}</h2>
    </>
  )
}
