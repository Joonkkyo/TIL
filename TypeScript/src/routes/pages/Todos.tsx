import { Link } from 'react-router'
import TodoList from '@/components/todos/TodoList'
import TodoCreater from '@/components/todos/TodoCreater'

export default function Todos() {
  return (
    <>
      <Link to="/">Main</Link>
      <TodoCreater />
      <TodoList />
    </>
  )
}
