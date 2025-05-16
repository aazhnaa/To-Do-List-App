import React from 'react'
import ListCard from '../components/ListCard'
import AddTask from '../components/AddTask'
import { useEffect, useState } from 'react'
const Home = ({tasks, setTasks}) => {

    const handleClear=()=>{
        localStorage.removeItem("tasks")
        setTasks([])
    }
  return (
    <div >    
      {
        (tasks.length === 0 ) ? <p className='text-[50px] m-8 text-gray-600 font-bold '>No tasks yet! </p>
         :
        <div className='flex flex-col justify-center item-center '>
        <p className ='text-[40px] m-6 text-gray-600 font-bold  '>Your pending tasks : </p>
        <button onClick={handleClear} className='bg-blue-100 m-8 rounded-lg w-fit text-black font-bold pl-4 pr-4 pt-2 pb-2'>Clear Tasks</button>
         <div className='flex flex-col justify-center item-center w-full'>
            {
              tasks.map(task => (
                <ListCard key={task.id} task={task} setTasks={setTasks} />
              ))
            }
         </div>
        </div>
      }
    </div>
  )
}

export default Home
