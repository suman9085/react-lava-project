import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment } from './redux/counterSlice'

function Home() {
  const {count} = useSelector(state=>state.counter)
  const dispatch = useDispatch()

  return (
    <div>
        <h1>Home</h1>
         <h2>count:{count}</h2>
        <button onClick={()=>dispatch(increment())}>
            Increment
        </button>
    </div>
  )
}

export default Home