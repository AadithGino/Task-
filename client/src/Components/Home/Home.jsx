import React from 'react'
import { useSelector } from 'react-redux'
import TopBar from '../TopBar/TopBar'

function Home() {
    const adminData = useSelector((state)=>state.adminLoginReducer.adminData)
    console.log(adminData);
  return (
    <div>
      <TopBar/>
      <h1>WELCOME {adminData.userName}</h1>
    </div>
  )
}

export default Home
