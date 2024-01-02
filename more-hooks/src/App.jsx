import { useState } from 'react'
import './App.css'
import UseReducer from './concepts/UseReducer'
import TodoApp from './components/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseReducer/> */}
      <TodoApp/>
    </>
  )
}

export default App