import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPages from './assets/Pages/LoginPages'
import RegisterPages from './assets/Pages/RegisterPages'
import Awalpages from './assets/Pages/Awalpages'
import PageMembaca from './assets/Pages/PageMembaca'
import PageCard from './assets/Pages/PageCard'
import PageMenulis from './assets/Pages/PageMenulis'
import PageHuruf from './assets/Pages/PageHuruf'

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
    element: <PageCard />
  },
  {
    path:"/Membaca",
    element: <PageMembaca />
  },
  {
    path:"/Menghitung",
    element: <div>Mari menghitung</div>
  },
  {
    path:"/Menulis",
    element: <PageMenulis />
  },
  {
    path:"/Percakapan",
    element: <div>Mari Ngobrol</div>
  },
  {
    path:"/Inggris",
    element: <div>Mari Belajar Bahasa Inggris</div>
  },
  {
    path:"/Huruf",
    element: <PageHuruf/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
