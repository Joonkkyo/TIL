import { useState, useMemo, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(1)
  // useMemo는 컴포넌트가 리렌더링 될 때 특정 값을 기억하고 재사용함, 새로운 반응형 데이터를 생성함
  // useMemo(실행할 함수, 의존성 배열)

  // 계산된 데이터: useMemo(실행할 함수, 의존성 배열)
  const double = useMemo(() => count * 2, [count])

  // 데이터 감시: useEffect(실행할 함수, 의존성 배열)
  useEffect(() => {
    console.log(`double은 ${double}입니다.`)
  }, [double])

  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>Count: {count}</h1>
      <h2>Double: {double}</h2>
    </>
  )
}
