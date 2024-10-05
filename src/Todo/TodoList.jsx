import React from 'react'

function TodoList({post}) {
  return (
    <ul className="space-y-2">
        <li className="flex justify-between items-center bg-indigo-100 p-2 rounded-md">
        <span>{post.title}</span>
        <div className="space-x-2">
            <button className="text-blue-500 hover:text-blue-600">Update</button>
            <button className="text-red-500 hover:text-red-600">Delete</button>
        </div>
        </li>
       
    </ul>
  )
}

export default TodoList
