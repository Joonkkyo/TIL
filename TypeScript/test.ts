const a: string = '1' // 변수 타입 명시 가능
console.log(a)

const b: bigint = 123n // bigint 타입 명시 가능
console.log(b)

const a: number[] = [1, 2, 3]
console.log(a)

const a = {
  name: 'John',
  age: 85,
  emails: ['john@gmail.com']
}

const a: {
  name: string
  age: number
  emails: string[]
} = {
  name: 'John',
  age: 85,
  emails: ['john@gmail.com']
}

// 인터페이스 타입 정의하여 사용
interface User {
  name: string
  age: number
  emails: string[]
}

const a: User = {
  name: 'John',
  age: 85,
  emails: ['john@gmail.com']
}

// 함수 반환 타입 명시
function add(a: number, b: number): number {
  return (a = b)
}

console.log(add(1, 2))

function log(msg: string): void {
  console.log(msg)
}

log('hello')

const numbers: never[] = []
console.log(numbers[0])

// intersection type
function add(a: string | number | boolean, b: number): number {
  return a + b
}

const a = add('hello', 1)

interface UserA {
  name: string
}

interface UserB {
  age: number
}

const a: UserA & UserB = {
  name: 'John'
  age: 85
}

let cc = 1
console.log(cc)


// 원시형 데이터
// 원시형 데이터는 값 자체를 저장하는 데이터 타입 (추론이 됨)
// 원시형 데이터는 변수에 할당될 때 값 자체가 복사되어 저장됨
// 문자, 숫자, boolean, null, undefined, symbol, bigint


// 참조형 데이터
// 객체, 배열

const data = {
  currentUser:  null
}

function login() {
  // 서버 통신 코드
  const userFromServer = { /*...*/ }
  data.currentUser = userFromServer
}

export interface User {
  name: string
  age: number
  emails: string[]
  isValid?: boolean // 없을수도 있음
}

const neo: User = {
  name: 'Neo',
  age: 20,
  emails: ['neo@gmail.com'],
  isValid: true
}



