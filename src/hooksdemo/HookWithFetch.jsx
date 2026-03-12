import React, { useEffect, useState } from 'react'

// const URL = "https://jsonplaceholder.typicode.com/users";

function HookWithFetch(url) {

  const [data,setData] = useState([])

  useEffect(()=>{
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> setData(data))
  },[url])

  return [data]
}

export default HookWithFetch



// (
//     <div>
//       {
//         data.map((item)=>{
//           return <p key={item.id}>{item.username}</p>
//         })
//       }
//     </div>
//   )