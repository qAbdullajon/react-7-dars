import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <h1 className='text-center text-3xl'>AdminLayout</h1>
      <div className='flex gap-5'>
        <NavLink className="text-xl bg-blue-500 px-6 text-white" to="/admin-layout">Admin Layout</NavLink>
        <NavLink className="text-xl bg-green-500 px-6 text-white" to="cars">Cars</NavLink>
        <NavLink className="text-xl bg-orange-500 px-6 text-white" to="admin-list">Admin List</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default AdminLayout