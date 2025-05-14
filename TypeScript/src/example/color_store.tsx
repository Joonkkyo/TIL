import A1 from '../components/A1'
import { useColorStore } from '../stores/color'

export default function App() {
  // const [color, setColor] = useState('red')
  const color = useColorStore(state => state.color)
  const setColor = useColorStore(state => state.setColor)

  return (
    <>
      <h1
        onClick={() => setColor('blue')}
        style={{ color }}>
        App: {color}
      </h1>
      <A1 />
    </>
  )
}
