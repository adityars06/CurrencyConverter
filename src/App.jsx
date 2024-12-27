import { useEffect, useState,useId } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import CurrencyDrop from './components/Dropdown'
import UseCurrencyOptions from './hooks/CurrencyOptions';

function App() {
const [amount,setAmount]=useState(0)
const [from,setFrom]=useState('USD')
const [to,setTo]=useState('INR')
const [converted,setConverted]=useState(0)


const swap=()=>{
  setAmount(converted)
  setConverted(amount)
  setFrom(to)
  setTo(from)
}

const conversion=()=>{
  setConverted(amount*Number(currencies1[to]))
}


 const currencies1=UseCurrencyOptions(from)


const fromRef=useId();
const toRef=useId();


return (
  <>
    <div className=' bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-6 mt-44 m-auto w-3/6 flex flex-col items-center justify-center '> 
    <h1 className='mb-4 font-bold text-lg'>Currency Converter -<span className='font-thin'> By Addysin</span></h1>
    
    <div className='flex items-center justify-center'>
        <label htmlFor={fromRef} className='w-11 cursor-pointer'>FROM:</label>
        <InputBox id={fromRef} amount={amount} setAmount={setAmount} disabled={false}/>
        <CurrencyDrop chosencur={from} setChosencurr={setFrom}  options={currencies1}/>
    </div>

    <button onClick={swap} className='px-6 py-3 bg-slate-500 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 hover:shadow-lg transition-all duration-300 z-10 -my-3 mr-3'>Swap</button>

    <div className='flex items-center justify-center'>
      <label htmlFor={toRef} className='w-11 cursor-pointer'>To:</label>
      <InputBox id={toRef} amount={converted} setAmount={setConverted} disabled={true}/>
      <CurrencyDrop chosencur={to} setChosencurr={setTo} options={currencies1}/>
    </div>
    <div>
   
    <button onClick={conversion} className=' mt-5 px-6 py-3 bg-slate-500 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 hover:shadow-lg transition-all duration-300'>Convert Currency</button>
    </div>

    </div>
    
    
  </>
)

  
 

}

 

export default App
