import { useState, useEffect } from 'react';



const UseCurrencyOptions=(currency='USD')=>{
  
  const [currencies,setCurrencies]=useState(null);
  useEffect(()=>{
    const apiKey = import.meta.env.VITE_EXCHANGE_API_KEY
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
    .then((res)=>res.json())
    .then((data)=>{
    setCurrencies(data.conversion_rates)
    })
  },[currency])

  return currencies;
}

export default UseCurrencyOptions

