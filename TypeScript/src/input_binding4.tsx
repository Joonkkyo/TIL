import { useState, Fragment } from 'react'

const fruits = ['사과', '바나나', '체리', '딸기']
export default function App() {
  const [text, setText] = useState('')

  return (
    <>
      <p>좋아하는 과일을 하나만 골라보세요</p>
      {fruits.map(fruit => (
        <Fragment key={fruit}>
          <label>
            <input
              type="radio"
              value={fruit}
              checked={text === fruit}
              onChange={e => setText(e.target.value)}
            />
            {fruit}
          </label>
          <br />
        </Fragment>
      ))}
      <h2>{text}</h2>
    </>
  )
}
