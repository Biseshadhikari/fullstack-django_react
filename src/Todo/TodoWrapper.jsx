import React, { useEffect, useState } from 'react';
import { useTodoContext } from '../context/TodoContextProvider';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';
import axios from 'axios';


function TodoWrapper() {
const [title,setTitle] = useState({})
const [posts,setPosts] = useState([])
const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{ 
        getData()
    },[])

    async function getData(){
        try{ 
            const response = await axios.get('http://127.0.0.1:8000/todos/')
        // setPosts()
        
        if (response.status == 200){ 
            setPosts(response.data)
            setIsLoading(false)
        }
        } catch{
            console.log('error occured')
        }
        
        
        
    }
    async function createTodo(title){
        try{ 
            const response = await axios.post('http://127.0.0.1:8000/createTodo/',
                { 
                    "title":title,
                    "is_completed":false
                }
            )
            getData()
            
           
        } catch{
            console.log('error occured')
        }
        
        
        
    }




  return (
    <div className="min-h-screen bg-indigo-50 flex justify-center items-center">
        {!isLoading?(
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        
            <h1 className="text-indigo-600 text-2xl font-bold mb-4 text-center">Todo App</h1>
    
            
           <TodoCreate createTodo = {createTodo}/>
    
            
    
            {posts.map(post=>(
                <TodoList key ={post.id} post ={post}/>
            ))}
            
            
          </div>
        ): 
            (
                <div>loading...</div>
            )
        }
      
    </div>
  );
}

export default TodoWrapper;
