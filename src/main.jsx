import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoContextProvider from './context/TodoContextProvider.jsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
    </UserContext>
  </StrictMode>,
)
