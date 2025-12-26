import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Counter from './Counter'
import './index.css'
// import Todo from './Todo'
import App from './App.jsx' 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    {/* <Counter /> */}
    {/* <Todo /> */}
    <App />
    </div>
  </StrictMode>,
)
