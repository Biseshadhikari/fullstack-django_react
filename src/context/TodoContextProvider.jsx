import React, { createContext, useContext, useState } from 'react'

const TodoContext = createContext()
export function useTodoContext(){ 
    return useContext(TodoContext)
}
function TodoContextProvider({children}) {
    const [data,setData] = useState('this is my data')
  return (
    <TodoContext.Provider value = {{data:data}}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
