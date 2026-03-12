import React, { createContext, useContext, useState } from 'react'
 
const empContext = createContext()
function EmployeeContext() {
    const [employee,setEmployee] = useState({
        id:123,
        name:"lava",
        location:"noida",
        department:"developer"
    })
  return (
    <div>
      <empContext.Provider value={employee}>
       <Salary></Salary>
      </empContext.Provider>
    </div>
  )
}
function Salary(){
    let context = useContext(empContext)
    return(
        <div>
            <p>salary:{context.id}</p>
            <Department/>
        </div>
    )
}
function Department(){
    let context = useContext(empContext)
    return(
        <div>
          <p>Department:{context.department}</p>
        </div>
    )
}

export default EmployeeContext