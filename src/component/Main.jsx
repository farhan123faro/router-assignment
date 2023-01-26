import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Main() {
  return (
    <div className='text-center'>
        <h1 className='display-1 text-center mt-5' >this is main page</h1>
        <Link to="mchild1">click here for child 1</Link>
        <br />
        <Link to="mchild2">Click here for main child 2</Link>

        <Outlet/>
    </div>
  )
}

export default Main