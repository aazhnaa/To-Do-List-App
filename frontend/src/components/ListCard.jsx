import React from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useState } from 'react';

const ListCard = ({task, setTasks}) => {

    const [isDone, setIsDone] = useState(false)
    const handleClick =()=>{
        if(isDone)setIsDone(false)
            else setIsDone(true)
    }

    const handleDelete =(t)=>{
        const existingTasks = JSON.parse(localStorage.getItem("tasks")) ||[]
        const updatedTasks=existingTasks.filter(ctask=>ctask.id !== t.id) || []
        localStorage.setItem("tasks",JSON.stringify(updatedTasks))
        setTasks(updatedTasks)
    }
  return (
    <div className='w-[60%] text-3xl bg-blue-100 p-8 m-4 rounded-lg flex flex-row justify-between'>
      <p className='font-bold'>{task.title} </p>
      <div className='flex'><button onClick={handleClick}>{(isDone)?<IoCheckbox className='text-3xl cursor-pointer ' />:<MdCheckBoxOutlineBlank className='text-3xl cursor-pointer' />}</button>
      <button onClick={()=>handleDelete(task)}><RiDeleteBin6Line className='ml-4'/></button></div>
    </div>
  )
}

export default ListCard
