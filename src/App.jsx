import { useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState("")

  const handleClick = e => setResult(result.concat(e.target.id))

  const clear = () => setResult("");

  const deleteEl = () => setResult(result.slice(0, -1));

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Error")
    }
  }

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col w-[340px] h-[550px] bg-zinc-300 rounded-3xl shadow-xl'>
          <div className='flex bg-zinc-300 rounded-3xl p-2 justify-center h-44'>
            <input type='text' value={result} className='w-full h-full bg-white rounded-t-2xl text-5xl text-right p-5' disabled />
          </div>
          <div className='flex flex-row justify-center gap-5 mt-5'>
            <button className='bg-blue-600 text-white shadow-xl rounded-full h-14 w-14' onClick={clear}>C</button>
            <button className='bg-blue-600 text-white shadow-xl rounded-full h-14 w-14' onClick={deleteEl}>DEL</button>
            <button id='.' className='bg-blue-600 text-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>%</button>
            <button id='/' className='bg-blue-600 text-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>/</button>
          </div>
          <div className='flex flex-row justify-center gap-5 mt-3'>
            <button id='7' className='bg-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>7</button>
            <button id='8' className='bg-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>8</button>
            <button id='9' className='bg-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>9</button>
            <button id='*' className='bg-blue-600 text-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>*</button>
          </div>
          <div className='flex flex-row justify-center gap-5 mt-3'>
            <button id='4' className='bg-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>4</button>
            <button id='5' className='bg-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>5</button>
            <button id='6' className='bg-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>6</button>
            <button id='-' className='bg-blue-600 text-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>-</button>
          </div>
          <div className='flex flex-row justify-center gap-5 mt-3'>
            <button id='1' className='bg-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>1</button>
            <button id='2' className='bg-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>2</button>
            <button id='3' className='bg-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>3</button>
            <button id='+' className='bg-blue-600 text-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>+</button>
          </div>
          <div className='flex flex-row justify-center gap-5 mt-3'>
            <button id='0' className='bg-white shadow-xl rounded-full h-14 w-[135px]' onClick={handleClick}>0</button>
            <button id='.' className='bg-white shadow-xl rounded-full h-14 w-14' onClick={handleClick}>.</button>
            <button id='=' className='bg-blue-600 text-white shadow-xl rounded-full h-14 w-14' onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
