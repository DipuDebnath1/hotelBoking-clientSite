import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:([
      {
        path:'/',
        element:<Home></Home>
      }
    ])
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
