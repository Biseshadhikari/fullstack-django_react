import React, { createContext, useContext, useState,useEffect } from 'react'
import axios from 'axios';

const TodoContext = createContext()
export function useTodoContext(){ 
    return useContext(TodoContext)
}
function TodoContextProvider({children}) {

const [title,setTitle] = useState({})
const [posts,setPosts] = useState([])
const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{ 
        getData()
    },[])

    async function getData(){
        
    
        try{ 
            const response = await axios.get('http://127.0.0.1:8000/todos/'
               
            )
        // setPosts()
        
        if (response.status == 200){ 
            setPosts(response.data)
            setIsLoading(false)
        }
        } catch{
            console.log('error occured')
        }
        
        
        
    }
    async function createTodo(title) {
        try { 
            // const token = JSON.parse(localStorage.getItem('token')); // Correct the token retrieval
            // if (!token) {
            //     console.log("Token not found. Please log in again.");
            //     return;
            // }
    
            const response = await axios.post('http://127.0.0.1:8000/createTodo/',
                { 
                    "title": title,
                    "is_completed": false
                }
            );
    
            console.log('Todo created:', response.data);
            getData();  // Call the function to refresh the data after creating the todo
    
        } catch (error) {  // Add error parameter to catch block
            console.error('Error occurred while creating Todo:', error.response ? error.response.data : error);
        }
    }
    

    async function updateTodo(title,id,is_completed){
        try{ 
            const response = await axios.put(`http://127.0.0.1:8000/updateTodo/${id}/`,
                { 
                    "title":title,
                    "is_completed":is_completed
                }
            )
            getData()
            
            
           
        } catch{
            console.log('error occured')
        }
        
        
        
    }
    async function changeIsCompleted(title,id,is_completed){
        try{ 
            const response = await axios.put(`http://127.0.0.1:8000/updateTodo/${id}/`,
                { 
                    "title":title,
                    "is_completed":is_completed
                }
            )
            getData()
            
            
           
        } catch{
            console.log('error occured')
        }
        
        
        
    }
    async function deleteTodo(id){
        try{ 
            const response = await axios.delete(`http://127.0.0.1:8000/deleteTodo/${id}/`)
            getData()
            
            
           
        } catch{
            console.log('error occured')
        }
        
        
        
    }
  return (
    <TodoContext.Provider value = {{posts:posts,createTodo:createTodo,updateTodo:updateTodo,deleteTodo:deleteTodo,isLoading:isLoading,changeIsCompleted:changeIsCompleted}}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
