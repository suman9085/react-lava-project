import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Users from "./Users";
import AddUser from "./AddUser";

export default function MainApp() {

 const [headerData,] = useState("Welcome to header")
 const [footerData] = useState("")
 const [userData,setUserData] = useState([])

const addUser = (data)=>{
   setUserData([...userData, data])
   
}
const deleteUser = (()=>{
  setUserData([])
})

  return (
    <div>
      <Header hdata={headerData}/>
      <p>Welcome to mainapp</p>

      <Users 
        udata={userData}
        hashData={userData.length === 0}
        da={deleteUser}
      />

      <Footer fdata={footerData}/>
      <AddUser au={addUser}/>
    </div>
  );
}