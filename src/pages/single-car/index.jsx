import React from 'react'
import { useParams } from 'react-router-dom'

const SingleCar = () => {
  const { id } = useParams()
  return (
    <div>
      <h1 className="text-3xl">Car: {id}</h1>
    </div>
  )
}

export default SingleCar