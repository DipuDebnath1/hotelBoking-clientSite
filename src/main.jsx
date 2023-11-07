import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Rooms from './pages/rooms/Rooms.jsx'
import MyBooking from './pages/booking/MyBooking.jsx'
import LoginFrom from './pages/form/Login.jsx'
import AuthProvider from '../AuthProvider.jsx'
import Register from './pages/form/Register.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: ([
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/rooms',
        element: <Rooms></Rooms>
      },
      {
        path: '/mybooking',
        element: <MyBooking></MyBooking>
      },

      {
        path: '/login',
        element: <LoginFrom></LoginFrom>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
 
    ])
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}> </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
