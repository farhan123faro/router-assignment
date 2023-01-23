import React from 'react'
import { Outlet } from 'react-router-dom'

function Thirdpage() {
  return (
    <div>
        <h1 className='display-1 text-center'  >This is third page start </h1>
        <Outlet/>
        <h1 className='display-1 text-center'  >This is third page end</h1>

    </div>
  )
}

export default Thirdpage