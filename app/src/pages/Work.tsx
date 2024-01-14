import React from 'react'
import { Outlet } from 'react-router-dom'

const Work:React.FC = () => {
  return (
    <div>
        <p>Work page</p>

        <Outlet/>
    </div>
  )
}

export default Work