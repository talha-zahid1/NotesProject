import  { useState } from 'react'
import {X} from 'lucide-react'

const App = () => {
  const [title, settitle] = useState('')
  const [detail, setdetail] = useState('')
  const [task, settask] = useState([])
  const submithandler=(e)=>{
    e.preventDefault()
    const copytask=[...task]
    copytask.push({title,detail})
    settask(copytask)
    setdetail('')
    settitle('')
  }

  return (
    <div className='lg:h-screen  lg:flex bg-slate-950 text-white'>
      
      <form onSubmit={(e)=>{
        submithandler(e)
      }} className="flex  lg:w-150 lg:w- flex-col items-start  p-10 gap-6 ">
        <h1 className='text-4xl font-bold'>Add Notes</h1>  
          <input 
          type="text" 
          placeholder='Enter Notes Heading' 
          className="px-5 py-2 w-full  border-2 font-medium rounded outline-none border-gray-500" 
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
            
          }}
          />
      <textarea 
      type="text" 
      placeholder='Enter Details'
      className="w-full h-42 font-medium outline-none px-5 py-2 border-2 rounded  border-gray-500" 
      value={detail}
      onChange={(e)=>{
        setdetail(e.target.value)
      }}
      />
      <button 
      className='bg-white w-full active:scale-96 text-gray-900 font-medium outline-none px-5 py-2 rounded'
      >
        Add-Note
        </button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-10 flex flex-col'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap overflow-auto  h-full  gap-5 mt-10'>
          {task.map((elem,idx)=>{
            return <div key={idx} className="flex justify-between flex-col  items-start  relative bg-cover bg-center py-6 px-4  bg-[url('https://pngimg.com/uploads/sticky_note/sticky_note_PNG18928.png')] h-60 w-40 p-4 rounded text-black  ">
              <div>
                <h3 className='leading-tight pt-5 text-xl font-bold'>{elem.title}</h3>
              <p className='leading-tight font-medium mt-2 mb-2 text-gray-500'>{elem.detail}</p>
              </div>
              <button onClick={(idx)=>{
                const copytask=[...task]
                copytask.splice(idx,1)
                settask(copytask)
              }} className='w-full bg-red-600 text-white py-1 text-xs rounded font-bold cursor-pointer active:scale-95'>Delete </button>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App