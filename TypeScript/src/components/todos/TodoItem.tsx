import { useState, useEffect, useRef } from 'react'
import type { Todo } from '@/stores/todo'
import { useTodoStore } from '@/stores/todo'

// Default Export
// Named Export
export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const updateTodo = useTodoStore(state => state.updateTodo)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    // 데이터 감시
    if (isEditMode) {
      // 포커스
      inputRef.current?.focus()
    }
  }, [isEditMode])

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
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                updateTodo({
                  ...todo,
                  title // 덮어쓰기
                })
              }
            }}
          />
          <button
            onClick={() =>
              updateTodo({
                ...todo,
                title // 덮어쓰기
              })
            }>
            저장
          </button>
        </>
      ) : (
        <>
          <div>{todo.title}</div>
          <button
            className="rounded-md bg-blue-500 px-2 text-white"
            onClick={() => setIsEditMode(true)}>
            수정
          </button>
        </>
      )}
    </div>
  )
}
