import React from 'react'
import HookWithFetch from './HookWithFetch'

const URL = "https://jsonplaceholder.typicode.com/todos";

function HookClient() {
    const [data] = HookWithFetch(URL)
  return (
    <div>
{
    data.map((item)=>{
        return <p key={item.id}>{item.title}</p>
    })
}
    </div>
  )
}

export default HookClient