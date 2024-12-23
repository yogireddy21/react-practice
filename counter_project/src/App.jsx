
import { useState } from 'react';
import './App.css'

function App() {
   let [counter,setcounter]=useState(10);
   const add=()=>{
    if(counter<20)setcounter(counter+1);
    
    //console.log(counter);
   }
   const sub=()=>{
    if(counter>0)setcounter(counter-1);
    
    //console.log(counter);
   }
  return (
    <>
    <h1 className='mb-10'>Counter is:{counter}</h1>
    <button className='bg-red-500 rounded-2xl text-black mb-5' onClick={add}>ADD</button>
    <br/>
    <button className='bg-blue-500 rounded-2xl text-red-600 mb-5' onClick={sub}>SUBRACT</button>
    </>
  )
}

export default App
