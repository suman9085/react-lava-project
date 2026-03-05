import React from 'react'

export default function AddUser(props) {
    function addUser(e){
        e.preventDefault()
        const data = e.target.elements.uname.value
         props.au(data)
    }
  return (
    <div>
        <form onSubmit={addUser}>
            UserName:<input type='text' name='uname'/>
        <button >Add user</button>
        </form>
    </div>
  )
}
