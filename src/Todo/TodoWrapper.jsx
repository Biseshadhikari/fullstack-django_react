import React, { useEffect, useState } from 'react';
import { useTodoContext } from '../context/TodoContextProvider';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';
import axios from 'axios';


function TodoWrapper() {

    const {isLoading,changeIsCompleted,createTodo,updateTodo,deleteTodo,posts} = useTodoContext()



  return (
    <div className="min-h-screen bg-indigo-50 flex justify-center items-center">
        {!isLoading?(
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        
            <h1 className="text-indigo-600 text-2xl font-bold mb-4 text-center">Todo App</h1>
    
            
           <TodoCreate createTodo = {createTodo}/>
    
            
    
            {posts.map(post=>(
                <TodoList changeIsCompleted = {changeIsCompleted} deleteTodo = {deleteTodo} updateTodo = {updateTodo} key ={post.id} post ={post}/>
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
