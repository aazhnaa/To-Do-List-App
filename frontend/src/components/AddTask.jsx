import React from 'react'
import { GrAddCircle } from "react-icons/gr";
import { useState } from 'react';
const AddTask = ({setTasks}) => {

    const [task, setTask] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!task.trim()) return
        const existingTasks = JSON.parse(localStorage.getItem("tasks")) || []
        const newTask = {
            id: Date.now().toString(),
            title:task
        }
        const updatedTasks = [...existingTasks,newTask]
        localStorage.setItem("tasks",JSON.stringify(updatedTasks))
        setTasks(updatedTasks)
        setTask("")
    }
  return (
    <>
      <div className='w-[60%] text-3xl bg-blue-100 p-8 m-4 rounded-lg cursor-pointer flex flex-row justify-center'>
            
            <form onSubmit={handleSubmit} className='flex w-[60%] flex-row '>
                <input className='rounded-lg bg-white text-sm ml-10 pl-4 pr-10 pt-2 pb-2 focus:ring-gray-300' type="text" placeholder='enter task' value={task} onChange={(e)=>setTask(e.target.value)}/>
                <button type="submit" className='pl-4 pr-4'><GrAddCircle/></button>
            </form>
    </div>
    </>
  )
}

export default AddTask
