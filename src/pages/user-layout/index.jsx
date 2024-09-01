import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <h1 className='text-center text-3xl'>UserLayout</h1>
      <div>
        <NavLink to="/user-layout" className="text-xl bg-blue-600 px-6 text-white">User Layout</NavLink>
        <NavLink to="user-list" className="text-xl bg-red-600 px-6 text-white">User List</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default UserLayout