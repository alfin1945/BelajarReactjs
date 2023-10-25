import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPages from './assets/Pages/LoginPages'
import RegisterPages from './assets/Pages/RegisterPages'
import CardLayouts from './assets/components/Layouts/CardLayouts'
import Awalpages from './assets/Pages/Awalpages'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Awalpages/>
  },
  {
    path:"/Login",
    element: <LoginPages/>
  },
  {
    path:"/Register",
    element: <RegisterPages/>
  },
  {
    path:"/Belajar",
    element: <CardLayouts />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
