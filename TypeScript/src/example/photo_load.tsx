import Image from './components/Image'

export default function App() {
  return (
    <>
      <Image
        src="https://picsum.photos/1000/500"
        width={1000}
        height={500}
      />
      <Image
        src="https://picsum.photo/500/300" // load fail
        width={500}
        height={300}
      />
    </>
  )
}
