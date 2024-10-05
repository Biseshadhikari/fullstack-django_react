import React,{useState} from 'react'

function TodoCreate({createTodo}) {
    const [title,setTitle] = useState()
  return (
    <form className="flex mb-4" onSubmit={(e)=>{ 
        e.preventDefault()
        createTodo(title)
        setTitle('')
    }}>
          <input
            type="text"
            placeholder="Add a new task..."
            value = {title}
            onChange={(e)=>{ 
                setTitle(e.target.value)
            }}
            className="w-full p-2 border border-indigo-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 rounded-r-md">
            Add
          </button>
    </form>
  )
}

export default TodoCreate
