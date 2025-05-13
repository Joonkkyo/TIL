import styles from './TextField.module.css'

export default function TextField({
  label,
  hint,
  value,
  onChange,
  deleteValue,
  ...restProps // 객체 데이터, 정의되지 않은 매개변수가 들어옴
}: React.InputHTMLAttributes<HTMLInputElement> & {
  // 인터섹션
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  hint?: string
  deleteValue: () => void
}) {
  // 컴포넌트 캡슐화
  return (
    <div>
      <label className="block">
        {label && <span>{label}</span>}
        <input
          {...restProps}
          className="w-[100%] border-1 border-gray-400"
          value={value}
          onChange={onChange}
        />
      </label>
      <button
        className="bg-red-500 text-white"
        onClick={deleteValue}>
        삭제
      </button>
      {hint && <p>{hint}</p>}
    </div>
  )
}
