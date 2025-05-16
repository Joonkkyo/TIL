import { useState } from 'react'
import TextField from './components/TextField'
import Button from './components/Button'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function logIn() {
    console.log(email, password)
  }

  return (
    // label: props (명시적으로 정의하는 속성)
    // 폴스루 속성: 묵시적으로 정의되는 속성
    // slot: 컴포넌트의 내용
    // 자식 컴포넌트 : TextField
    <>
      <TextField
        label="이메일"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        deleteValue={() => setEmail('')}
      />
      <TextField
        label="비밀번호"
        hint="대소문자를 하나 이상 포함해야 합니다."
        value={password}
        onChange={e => setPassword(e.target.value)}
        deleteValue={() => setPassword('')}
        type="password"
        placeholder="비밀번호를 입력하세요."
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
            console.log(e.currentTarget.value)
          }
        }}
      />
      <Button
        type="submit"
        onClick={logIn}>
        <span style={{ color: 'red' }}>로그인</span>
      </Button>
    </>
  )
}
