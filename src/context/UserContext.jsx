import React, { createContext, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const UserAuthContext = createContext()
export function useAuthContext(){ 
    return useContext(UserAuthContext)
}
function UserContext({children}) {
    async function  login(username,password){ 
        console.log(username,password)
            const userCredentials = { username, password };
    
            try {
            const response = await axios.post("http://localhost:8000/loginuser/", userCredentials, {
                headers: {
                "Content-Type": "application/json",
                },
            });
    
            if (response.status === 200) {
                console.log('login')
                const accessToken = response.data.Token; // Extract the JWT token
                console.log(accessToken)
                localStorage.setItem('token', JSON.stringify(accessToken));
                localStorage.setItem('isAuth', JSON.stringify(true)); // Store token in localStorage
                
                console.log("Logged in successfully", response.data);
            }
            } catch (err) {
            if (err.response) {
                // Error response from server
                
            } else {
                // Network or other errors
                
            }
            }
    
        }

  return (
    <div>
        <UserAuthContext.Provider value = {{login:login}}>
                {children}
        </UserAuthContext.Provider>
     
    </div>
  )
}

export default UserContext
