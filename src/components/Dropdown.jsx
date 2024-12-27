import React from 'react'

function CurrencyDrop({options,chosencur,setChosencurr}) {

  if(!options){
    return <select className=' bg-slate-500 text-white font-semibold rounded-lg shadow-sm p-2 focus:bg-slate-700 transition duration-200   cursor-pointer'><option>Loading</option></select>
  }
  return (

    <select value={chosencur} onChange={(event)=>setChosencurr(event.target.value)} className=' bg-slate-500 text-white font-semibold rounded-lg shadow-sm p-2 cursor-pointer'>
      {Object.keys(options).map((currency)=>(
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
    
      
    
    
  )
}

export default CurrencyDrop
