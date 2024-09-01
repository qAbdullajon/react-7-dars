import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { Modal } from 'reactstrap'

const GlobalMadal = (props) => {
  const { toggle, open, data, setData, update, setUpdate } = props
  const [form, setForm] = useState({})
  const hendleChane = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const clearMadal = () => {
    toggle(false)
  }
  const hendleSubmit = (e) => {
    e.preventDefault()
    if (update.id) {
      data.forEach(item => {
        if (item.id === update.id) {
          item.name = form.name || update.name
          item.price = form.price || update.price
          item.year = form.year || update.year
          item.color = form.color || update.color
        }
      })
      setData(data)
    } else {
      setData([...data, { ...form, id: nanoid() }])
    }
    setForm({})
    setUpdate({})
    clearMadal(false)
  }
  return (
    <Modal onClick={clearMadal} isOpen={open} toggle={toggle} className='fixed top-0 left-0 w-full h-full bg-gray-400 bg-opacity-50 flex justify-center items-center'>
      <div onClick={(e) => e.stopPropagation()} className='bg-white p-5 w-[450px] rounded-2xl'>
        <div className='flex justify-between mb-4'>
          <h1 className='text-3xl'>Modal</h1>
          <button onClick={() => clearMadal()} className='bg-red-500 w-8 h-8 flex justify-center items-center rounded'>
            <i className="fa-solid fa-xmark text-white text-xl"></i>
          </button>
        </div>
        <form className='flex flex-col gap-2' onSubmit={hendleSubmit}>
          <input defaultValue={update.name} onChange={hendleChane} name='name' className='text-xl px-2 py-1 border outline-none w-full rounded-sm' type="text" placeholder='Name' />
          <input defaultValue={update.price} onChange={hendleChane} name='price' className='text-xl px-2 py-1 border outline-none w-full rounded-sm' type="number" placeholder='Price' />
          <input defaultValue={update.year} onChange={hendleChane} name='year' className='text-xl px-2 py-1 border outline-none w-full rounded-sm' type="text" placeholder='Year' />
          <input defaultValue={update.color} onChange={hendleChane} name='color' className='text-xl px-2 py-1 border outline-none w-full rounded-sm' type="text" placeholder='Color' />
          <button type='submit' className='text-xl text-white py-1 bg-green-600'>Save</button>
        </form>
      </div>
    </Modal>
  )
}

export default GlobalMadal