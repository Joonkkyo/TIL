import { useState } from 'react'

// export default App
// 하나의 컴포넌트는 하나의 요소만 내보내기 가능
// 화면 값과 실제 데이터를 묶어주는 것 => 반응형 데이터
export default function App() {
  const title = 'React'
  //const [데이터이름, 데이터변경함수] = useState<데이터타입>(기본값)
  const [count, setCount] = useState<number>(0) // [읽기 전용(getter), 쓰기 전용(setter)], 추론이 될 땐 타입생략 가능

  function handleClick() {
    const newCount = count + 1
    setCount(newCount)
    console.log('count:', newCount)
  }

  return (
    <>
      <h1>Hello {title}?!</h1>
      <h2 onClick={handleClick}>Count: {count}</h2>
    </>
  )
}
