import { useTextContext } from "./context/TextContextProvider"

const App = () => {
  const {text} = useTextContext()

  return (
    <div>
      {text.map(line=><p>{line}</p>)}
    </div>
  )
}

export default App