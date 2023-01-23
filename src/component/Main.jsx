import React from 'react'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div>
        <h1 className='display-1 text-center mt-5' >this is main page</h1>
        <Outlet/>
    </div>
  )
}

export default Main