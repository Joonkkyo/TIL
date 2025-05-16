import { useState, useEffect, useRef } from 'react'
import type { Todo } from '@/stores/todo'
import { useTodoStore } from '@/stores/todo'
import Button from '@/components/Button'

// Default Export
// Named Export
export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const [loading, setLoading] = useState(false)
  const updateTodo = useTodoStore(state => state.updateTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    // 데이터 감시
    if (isEditMode) {
      // 포커스
      inputRef.current?.focus()
    }
  }, [isEditMode])

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.nativeEvent.isComposing) return
    if (e.key === 'Enter') {
      updateTodo({
        ...todo,
        title // 덮어쓰기
      })
    }

    if (e.key === 'Escape') {
      handleCancel()
    }
  }

  function handleCancel() {
    setIsEditMode(false)
    setTitle(todo.title)
  }

  return (
    <div className="flex gap-[10px]">
      {isEditMode ? (
        <>
          <input
            ref={inputRef}
            className="border-gray400 rounded-md border-1"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            onClick={() =>
              updateTodo({
                ...todo,
                title // 덮어쓰기
              })
            }
            color="primary"
            loading={loading}>
            저장
          </Button>
          <Button
            onClick={handleCancel}
            color="secondary"
            loading={loading}>
            취소
          </Button>
        </>
      ) : (
        <>
          <div>{todo.title}</div>
          <Button
            className="rounded-md bg-blue-500 px-2 text-white"
            color="primary"
            loading={loading}
            onClick={() => setIsEditMode(true)}>
            수정
          </Button>
          <Button
            className="rounded-md bg-blue-500 px-2 text-white"
            color="danger"
            loading={loading}
            onClick={() => deleteTodo(todo)}>
            삭제
          </Button>
        </>
      )}
    </div>
  )
}
