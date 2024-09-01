import React, { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from '../App';
import { Cars, Home, SingleCar, AdminLayout, UserLayout, AdminList, UserList } from '../pages'

const Root = () => {
  const [data, setData] = useState([
  ])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='admin-layout' element={<AdminLayout />} >
          <Route path='cars' element={<Cars data={data} setData={setData} />} />
          <Route path='admin-list' element={<AdminList />} />
        </Route>
        <Route path='user-layout' element={<UserLayout />}>
          <Route path='user-list' element={<UserList />} />
        </Route>

        <Route path='/admin-layout/cars/:id' element={<SingleCar />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default Root