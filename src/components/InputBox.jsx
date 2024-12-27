import React, { useEffect, useState } from 'react'

const InputBox = ({amount,
  setAmount,
  id,
  disabled

}) => {

  return (
    <>
      <input
        type='number'
        value={amount}
        placeholder='Amount'
        onChange={(event)=>setAmount(event.target.value=""?0:Number(event.target.value) )}
        id={id}
        disabled={disabled}
        
        
        
        className='px-4 w-96 h-14 ml-6 mr-6 outline-none  bg-white/20 text-black font-semibold rounded-lg shadow-md ' ></input>
    </>
  )
}

export default InputBox
