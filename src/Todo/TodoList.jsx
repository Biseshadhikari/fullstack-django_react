import React, { useEffect, useState } from 'react'

function TodoList({post,updateTodo,deleteTodo,changeIsCompleted}) {
    const [title,setTitle] = useState(post.title)
    const [isUpdatable,setIsUpdatable] = useState(false)
    const [is_completed,setIsCompleted] = useState(post.is_completed)
    useEffect(()=>{ 
      changeIsCompleted(post.title,post.id,is_completed)

    },[is_completed])
  return (
    <>
    {isUpdatable?(
        <form class="flex items-center space-x-2" onSubmit={(e)=>{ 
            e.preventDefault()
            updateTodo(title,post.id,post.is_completed)
            setIsUpdatable(prev=>!prev)

        }}>
          <input type="text" value = {title} onChange={(e)=>{ 
            setTitle(e.target.value)
          }} placeholder="Enter your update" class="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <button  class="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Update
          </button>
          <button onClick={()=>{ 
                setIsUpdatable(prev=>!prev)
            }} class="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red   -600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            cancel
          </button>
        </form>
      
    ):(
        <ul className="space-y-2">
        <li className="flex justify-between items-center bg-indigo-100 p-2 rounded-md">
        <span  className ={`${is_completed?'line-through':''}`} onClick = {()=>{ 
          setIsCompleted(prev=>!prev)

        }}>{post.title}</span>
        <div className="space-x-2">
            <button className="text-blue-500 hover:text-blue-600" onClick={()=>{ 
                setIsUpdatable(prev=>!prev)
            }}>Update</button>
            <button className="text-red-500 hover:text-red-600" onClick={
              ()=>{ 
                console.log('clicked')
                deleteTodo(post.id)
              }
            }>Delete</button>
        </div>
        </li>
       
    </ul>
    )}

        </>
    
  )
}

export default TodoList
