import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const naviget = useNavigate()
  const [form, setForm] = useState({})
  const hendleSubmit = (e) => {
    e.preventDefault()
    if (form.username === "admin" && form.password === 123) {
      naviget('/admin-layout')
    } else if (form.username === "user" && form.password === 123) {
      naviget('/user-layout')
    } else {
      alert("Error...")
    }
  }
  const hendleChange = (e) => {
    let { name, value } = e.target
    if (name === "password") {
      value = Number(value)
    }
    setForm({ ...form, [name]: value })
  }
  return (
    <div className='bg-gray-400 bg-opacity-50 h-[100vh] flex justify-center pt-10'>
      <div className='w-1/3 h-fit p-5 rounded-2xl bg-white'>
        <div>
          <h1 className='text-3xl pb-2'>Login</h1>
        </div>
        <form onSubmit={hendleSubmit} className='flex gap-2 flex-col'>
          <input onChange={hendleChange} className='border px-2 py-1 text-xl outline-none w-full rounded-sm' type="text" placeholder="Username" name='username' />
          <input onChange={hendleChange} className='border px-2 py-1 text-xl outline-none w-full rounded-sm' type="password" placeholder="Pasword" name='password' />
          <button className='bg-green-600 text-xl py-1 text-white ' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Home