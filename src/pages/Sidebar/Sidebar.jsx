import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../context/context'

function Sidebar() {
    const {price,setPrice}=useContext(Context)
    const [pul,setPul]=useState(0)
    const addPrice = ()=>{
        setPrice(Number(price)+Number(pul))
    }
  return (
    <div className='w-[330px] bg-banner-image  border-2 border-gray-300 h-screen p-10'>
      <div className=' flex flex-col gap-5 items-center  justify-center '>
        <h1 className='text-3xl text-white'>All Price </h1>
        <h1 className='text-4xl text-white'>{price} sum</h1>
        <input onChange={e => setPul(e.target.value)} className='px-4 py-1 rounded-2xl border-2 border-gray-500' type="text" placeholder='add price' />
        <button onClick={addPrice} className=' bg-white px-4 py-2  rounded-1xl  rounded-2xl '>Add Price</button>
      </div>
    </div>
  )
}

export default Sidebar