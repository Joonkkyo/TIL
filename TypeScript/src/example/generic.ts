import { User } from './test'

const evan: User = {
  name: 'Evan',
  age: 20,
  emails: ['evan@gmail.com'],
  isValid: true
}

console.log(evan)

//제네릭 타입 함수
function add<T>(a: T, b: T): T {
  return a + b
}

console.log(add<number>(1, 2)) // 생략가능
console.log(add<string>('1', '2'))
console.log(add<boolean>(true, false))
console.log(add<string | number>('1', 2))
// console.log(add(1, '2')) // 의도하지 않은 사용 제한
//제네릭 타입 클래스
