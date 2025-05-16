import { useState } from 'react'
import './index.css'

export default function App() {
  const [title, setTitle] = useState('Hello World!')
  const [width, setWidth] = useState(200)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // change
    // input
    // keydown
    // submit <form>
    setTitle(event.target.value)
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
      console.log(event.currentTarget.value)
    }
  }

  // title => 단방향 데이터 바인딩
  return (
    <>
      <input
        value={title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <h1 className={title.length > 12 ? 'active' : ''}>{title}</h1>
      <div
        style={{ width: `${width}px` }}
        className="box"
        onClick={() => {
          setWidth(width + 50)
        }}></div>
    </>
  )

  /* // Emmet 문법
      .container>.inner>ul>li*100{$$}
      .box */
}
