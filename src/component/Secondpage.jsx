import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Secondpage() {
  return (
    <div className='text-center'>
      <h1 className='display-1 text-center mt-5'>This is second page</h1>
      <Link to="schild1">click here for second page child 1</Link><br />
      <Link to="schild2">click here for second page child 2</Link>
      <Outlet />

    </div>

  )
}

export default Secondpage