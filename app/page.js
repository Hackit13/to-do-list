"use client"
import React, { useState } from 'react'
import { render } from 'react-dom'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler =(e)=>{
e.preventDefault()
setmainTask([...mainTask, {title,desc}])


settitle("")
setdesc("")
console.log(mainTask)
  }

  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>

  if(mainTask. length >0)
    {
      renderTask=mainTask.map((t,i)=>{
        return (
        <li key={i} className='flex items-center justify-between mb-5'>
         <div className='flex items-center justify-between mb-5'>
         <h5 className='text-2xl font-semibold just'>{t.title}</h5>
         <h6 className='text-xl font-medium'>{t.desc}</h6>
        </div>
        <button className='bg-red-500 text-white px-4 py-2 rounded font-bold' 
        onClick={()=>
        {deleteHandler(i)}}>Delete</button>
        </li>
        )
     }
     )
    }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
     Harmeet's Todo List
    </h1>
    <form onSubmit={submitHandler}> 
      <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
      placeholder='Enter task here'
      value={title}
      onChange={(e)=>{
         settitle  (e.target.value)
      }}
      />
      <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
      placeholder='Enter description here'
      value={desc}
      onChange={(e)=>
        setdesc(e.target.value)
      }
      />
      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task Here</button>

    </form>
    <hr/>

    <div className='p-8 bg-slate-300'>
      <ul> {renderTask} 
      </ul>
    </div>
    </>
  )
}

export default page