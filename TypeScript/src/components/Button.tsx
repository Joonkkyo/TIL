export default function Button({
  children,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}) {
  // button tag 사이 모든 내용이 객체로 children으로 전달된다
  return <button {...restProps}>{children}</button>
}
