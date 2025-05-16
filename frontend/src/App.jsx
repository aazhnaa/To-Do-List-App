import React, { useEffect } from 'react'
import Home from './pages/Home'
import AddTask from './components/AddTask'
import { useState } from 'react'
const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || []
    setTasks(storedTasks)
  },[])
  
  return (
    <>
    <Home tasks = {tasks} setTasks={setTasks}/>
      <AddTask  setTasks={setTasks}/>
      
    </>
  )
}

export default App
