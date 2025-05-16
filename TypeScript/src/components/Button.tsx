import Loader from '@/components/Loader'

export default function Button({
  children,
  color = 'primary',
  loading,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'danger' | 'success'
  loading?: boolean
}) {
  // button tag 사이 모든 내용이 객체로 children으로 전달된다.
  // children은 button의 이름
  const buttonColor = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-300 text-black',
    danger: 'bg-red-500',
    success: 'bg-green-500'
  }

  return (
    <button
      {...restProps}
      className={`relative block h-[30px] min-w-[40px] rounded-md ${buttonColor[color]} text-white`}>
      {loading ? (
        <Loader
          color="white"
          size={16}
          weight={2}
        />
      ) : (
        children
      )}
    </button>
  )
}
