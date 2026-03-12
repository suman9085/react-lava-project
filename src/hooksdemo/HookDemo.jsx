import React, { useEffect, useState } from 'react'

export default function HookDemo(props) {
    const [count,setCount] = useState(1)
 
    //componentDidMount
    useEffect(()=>{
        console.log('calling only loading  time....')
    },[])
    //componentdidUpdate
    useEffect(()=>{
        console.log('calling only updating time..')
        const json = JSON.stringify(count)
        localStorage.setItem('count',json)
    },[count])

    const inc=()=>{
        setCount(count + 1)
    }
    const dec=()=>{
        setCount(count - 1)
    }
  return (
    <div>
        <p>this is current:{count}</p>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>decrement</button>
    </div>
  )
}
