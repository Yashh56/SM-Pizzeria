import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Components/Layout/Layout'
import Home from '../src/Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Menu from './Components/Menu/Menu'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"menu",
        element: <Menu/>
      },
      {
        path:"contact",
        element: <Contact/>
      }
    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
