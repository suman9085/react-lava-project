import React, { createContext, useContext, useState } from 'react'
 const empContext = createContext();
function ContextDemo(props) {
    const [employee,setEmployee] = useState({
        id:101,
        name:"admin",
        location:"chennai",
        salary:12345
    })
  return (
    <div>
        <empContext.Provider value={employee}>
        <Employee></Employee>
        </empContext.Provider>
     {/* <Employee/> */}
    </div>
  )
}
function Employee(props) {
    let context = useContext(empContext)
  return (
    <div>
        <p>Employee Component {context.id} -{context.name} - {context.location}</p>
        <Salary/>
    </div>
  )
}
function Salary(props) {
    let context = useContext(empContext)
  return (
    <div>
        <p>Salary: {context.salary}</p>
    </div>
  )
}
export default ContextDemo