
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const counter = useSelector((state)=>state.mycounter)

  return (
    <>
      welcome:{counter}
    </>
  )
}

export default App
