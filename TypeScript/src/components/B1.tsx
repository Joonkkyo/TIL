import B2 from './B2'

export default function B1({ color }: { color: string }) {
  return (
    <>
      <div>B1</div>
      <B2 color={color} />
    </>
  )
}
